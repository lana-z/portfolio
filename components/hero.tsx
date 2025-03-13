'use client'

import { useState, useEffect, useRef } from 'react'
import Image from "next/image"

export default function HeroSection() {
  // Background particles canvas
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const bgParticlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }>>([]);
  
  // Mouse follower particles canvas
  const mouseCanvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseParticlesRef = useRef<Array<{
    x: number;
    y: number;
    size: number;
    life: number;
    maxLife: number;
    color: string;
  }>>([]);
  
  // Initialize background particles
  useEffect(() => {
    const handleResize = () => {
      if (bgCanvasRef.current && bgCanvasRef.current.parentElement) {
        const { width, height } = bgCanvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
        bgCanvasRef.current.width = width;
        bgCanvasRef.current.height = height;
        
        if (mouseCanvasRef.current) {
          mouseCanvasRef.current.width = width;
          mouseCanvasRef.current.height = height;
        }
        
        // Reset particles when canvas size changes
        initBgParticles();
      }
    };
    
    const initBgParticles = () => {
      if (!bgCanvasRef.current) return;
      
      const particles = [];
      const particleCount = Math.min(Math.floor(dimensions.width * 0.05), 100);
      const colors = ['#e25c3d', '#f5efe6', '#f8e1d5'];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      bgParticlesRef.current = particles;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.width, dimensions.height]);
  
  // Background particles animation loop
  useEffect(() => {
    if (!bgCanvasRef.current) return;
    
    let animationFrameId: number;
    const ctx = bgCanvasRef.current.getContext('2d');
    
    if (!ctx) return;
    
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw and update particles
      bgParticlesRef.current.forEach((particle, i) => {
        const { x, y, size, speedX, speedY, color } = particle;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        
        // Connect particles that are close to each other
        for (let j = i + 1; j < bgParticlesRef.current.length; j++) {
          const particle2 = bgParticlesRef.current[j];
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(226, 92, 61, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
        
        // Update particle position
        bgParticlesRef.current[i] = {
          ...particle,
          x: x + speedX,
          y: y + speedY,
        };
        
        // Bounce off edges
        if (x < 0 || x > dimensions.width) {
          bgParticlesRef.current[i].speedX = -speedX;
        }
        if (y < 0 || y > dimensions.height) {
          bgParticlesRef.current[i].speedY = -speedY;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);
  
  // Mouse follower particles animation
  useEffect(() => {
    if (!mouseCanvasRef.current) return;
    
    let animationFrameId: number;
    const ctx = mouseCanvasRef.current.getContext('2d');
    
    if (!ctx) return;
    
    // Create new particles on mouse movement
    const createMouseParticles = () => {
      if (!mousePosition.x || !mousePosition.y) return;
      
      // Metallic blue-grey colors
      const colors = [
        '#7d98a1', // Steel blue-grey
        '#a5b5c0', // Light blue-grey
        '#5f7a8a', // Slate blue
        '#8fa3b0', // Metallic blue
        '#6d7f8c'  // Dark steel
      ];
      
      // Add new particles at mouse position
      for (let i = 0; i < 2; i++) {
        if (mouseParticlesRef.current.length < 50) { // Limit total particles
          mouseParticlesRef.current.push({
            x: mousePosition.x + (Math.random() - 0.5) * 20,
            y: mousePosition.y + (Math.random() - 0.5) * 20,
            size: Math.random() * 3 + 1,
            life: 0,
            maxLife: 50 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      if (mousePosition.x && mousePosition.y) {
        createMouseParticles();
      }
      
      // Draw and update mouse follower particles
      mouseParticlesRef.current = mouseParticlesRef.current.filter(particle => {
        const { x, y, size, life, maxLife, color } = particle;
        
        // Calculate opacity based on life
        const opacity = 1 - (life / maxLife);
        
        // Draw particle with fading effect
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Add metallic shine effect
        ctx.beginPath();
        ctx.arc(x - size/3, y - size/3, size/3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
        ctx.fill();
        
        // Update particle life
        particle.life += 1;
        
        // Move particle slightly away from mouse
        const dx = x - mousePosition.x;
        const dy = y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const moveX = (dx / distance) * 1;
          const moveY = (dy / distance) * 1;
          particle.x += moveX;
          particle.y += moveY;
        }
        
        // Keep particles that are still alive
        return particle.life < particle.maxLife;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, mousePosition]);
  
  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseCanvasRef.current) {
        const rect = mouseCanvasRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Text animation
  const [typedText, setTypedText] = useState("");
  const phrases = [
    "Software Developer",
    "Technical PM",
    "AI Enthusiast",
    "Web3 Native"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      const shouldDelete = isDeleting;
      
      // Set typing speed based on action
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!shouldDelete && typedText === currentPhrase) {
        // Pause at the end of typing
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (shouldDelete && typedText === "") {
        // Move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
      } else {
        // Update text
        setTypedText(
          shouldDelete
            ? currentPhrase.substring(0, typedText.length - 1)
            : currentPhrase.substring(0, typedText.length + 1)
        );
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 relative overflow-hidden min-h-[60vh] pt-16">
      {/* Background particles canvas */}
      <canvas 
        ref={bgCanvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Mouse follower particles canvas */}
      <canvas 
        ref={mouseCanvasRef} 
        className="absolute inset-0 w-full h-full z-1"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="flex items-center justify-center w-full text-[#e25c3d] font-mono text-3xl md:text-5xl tracking-wider mb-8">
          LANA ZUMBRUNN
        </div>
        
        <div className="mt-4 text-center">
          <div className="h-12 flex items-center justify-center">
            <span className="text-[#e25c3d] font-mono text-xl md:text-2xl">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-[#e25c3d] ml-1 animate-blink"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
