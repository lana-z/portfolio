'use client'

import { Button } from "@/components/ui/button"
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function FeatureSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const modalClasses = {
    overlay: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    content: "fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-[#f5efe6] p-8 shadow-xl z-50 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
    title: "text-2xl font-bold text-[#e25c3d] mb-2 font-mono",
    description: "text-[#e25c3d]/80 font-sans",
    closeButton: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#e25c3d] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[#e25c3d] data-[state=open]:text-white"
  };

  return (
    <section className="w-full px-6 md:px-20 py-4 md:py-8 relative -mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">

        {/* Emerging Tech Section */}
        <div className="flex flex-col space-y-4 border-r-0 md:border-r border-[#000]/80 pr-0 md:pr-6">
          <div className="pl-5">
          <h2 className="text-[#e25c3d] text-xl md:text-3xl pb-2">AI 
            <br></br>& Web3</h2>
          <p className="text-[#e25c3d] text-xs md:text-sm">AI apps, Web3 integration, scalable architectures</p>
          <div className="pt-4">
            <Dialog.Root open={openModal === 'tech'} onOpenChange={(open) => setOpenModal(open ? 'tech' : null)}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#f5efe6] text-[#e25c3d] border-[#e25c3d] hover:bg-[#f8e1d5] uppercase text-sm tracking-wider"
                >
                  Emerging Tech Work
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={modalClasses.overlay} />
                <Dialog.Content className={modalClasses.content}>
                  <Dialog.Title className={modalClasses.title}>AI & Web3 Projects</Dialog.Title>
                  <Dialog.Description className={modalClasses.description}>
                    AI-powered apps, web3-native apps, customized LLM outputs, and scalable multi-cloud architectures. AI training, onchain integrations and best practices.
                  </Dialog.Description>
                  <Dialog.Close className={modalClasses.closeButton}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          </div>
        </div>

        {/* Research & Strategy Section */}
        <div className="flex flex-col space-y-4 border-r-0 md:border-r border-[#000]/80 md:pr-6">
          <div className="pl-5">
          <h2 className="text-[#e25c3d] text-xl md:text-3xl pb-2">Research <br></br>& Strategy</h2>
          <p className="text-[#e25c3d] text-xs md:text-sm">Data-driven insights, MVPs, user journey mapping</p>
          <div className="pt-4">
            <Dialog.Root open={openModal === 'strategy'} onOpenChange={(open) => setOpenModal(open ? 'strategy' : null)}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#f5efe6] text-[#e25c3d] border-[#e25c3d] hover:bg-[#f8e1d5] uppercase text-sm tracking-wider"
                >
                  Strategy Work
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={modalClasses.overlay} />
                <Dialog.Content className={modalClasses.content}>
                  <Dialog.Title className={modalClasses.title}>Research & Strategy Projects</Dialog.Title>
                  <Dialog.Description className={modalClasses.description}>
                    Data-driven strategy, MVP development, and innovation consulting. Qualitative and quantitative research design, delivery and analysis. Expertise in user journey mapping.
                  </Dialog.Description>
                  <Dialog.Close className={modalClasses.closeButton}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          </div>
        </div>

        {/* PM Section */}
        <div className="flex flex-col space-y-4 border-r-0 md:border-r border-[#000]/80 pr-0 md:pr-6">
          <div className="pl-5">
          <h2 className="text-[#e25c3d] text-xl md:text-3xl pb-2">Product <br></br>Management</h2>
          <p className="text-[#e25c3d] text-xs md:text-sm">Roadmaps, agile execution, cross-team alignment</p>
          <div className="pt-4">
            <Dialog.Root open={openModal === 'pm'} onOpenChange={(open) => setOpenModal(open ? 'pm' : null)}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#f5efe6] text-[#e25c3d] border-[#e25c3d] hover:bg-[#f8e1d5] uppercase text-sm tracking-wider"
                >
                  PM Work
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={modalClasses.overlay} />
                <Dialog.Content className={modalClasses.content}>
                  <Dialog.Title className={modalClasses.title}>Product Management Projects</Dialog.Title>
                  <Dialog.Description className={modalClasses.description}>
                  Roadmap development, agile methodologies, and cross-functional team leadership. Expertise in technical and non-technical stakeholder alignment.
                  </Dialog.Description>
                  <Dialog.Close className={modalClasses.closeButton}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          </div>
        </div>

        {/* Software Section */}
        <div className="flex flex-col space-y-4">
          <div className="pl-5">
          <h2 className="text-[#e25c3d] text-xl md:text-3xl pb-2">Software Design <br></br>& Development</h2>
          <p className="text-[#e25c3d] text-xs md:text-sm">Full-stack systems, APIs, UI/UX innovation, deployment</p>
          <div className="pt-4">
            <Dialog.Root open={openModal === 'software'} onOpenChange={(open) => setOpenModal(open ? 'software' : null)}>
              <Dialog.Trigger asChild>
                <Button
                  variant="outline"
                  className="bg-[#f5efe6] text-[#e25c3d] border-[#e25c3d] hover:bg-[#f8e1d5] uppercase text-sm tracking-wider"
                >
                  Software Work
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className={modalClasses.overlay} />
                <Dialog.Content className={modalClasses.content}>
                  <Dialog.Title className={modalClasses.title}>Software Projects</Dialog.Title>
                  <Dialog.Description className={modalClasses.description}>
                  Full-stack system architecture and API integrations. UI/UX design, responsive and interactive experiences. Expertise in Python, JavaScript, Django, React, Next.js and Node.js.
                  </Dialog.Description>
                  <Dialog.Close className={modalClasses.closeButton}>
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}
