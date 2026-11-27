"use client"

import React from "react"
import { Image as ImageIcon, Paintbrush, Plus } from "lucide-react"

import {
  PopoverBody,
  PopoverButton,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverForm,
  PopoverHeader,
  PopoverLabel,
  PopoverRoot,
  PopoverSubmitButton,
  PopoverTextarea,
  PopoverTrigger,
} from "../ui/popover"

function PopoverInput() {
  const handleSubmit = (note: string) => {
    console.log("Submitted note:", note)
  }

  return (
    <PopoverRoot>
      <PopoverTrigger>Add Feedback</PopoverTrigger>
      <PopoverContent>
        <PopoverForm onSubmit={handleSubmit}>
          <PopoverLabel>Add Feedback</PopoverLabel>
          <PopoverTextarea />
          <PopoverFooter>
            <PopoverCloseButton />
            <PopoverSubmitButton />
          </PopoverFooter>
        </PopoverForm>
      </PopoverContent>
    </PopoverRoot>
  )
}

const ColorPickerPopover = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F1",
    "#33FFF1",
    "#F1FF33",
  ]

  return (
    <PopoverRoot>
      <PopoverTrigger>Choose Color</PopoverTrigger>
      <PopoverContent className="h-48 w-48">
        <PopoverHeader>Pick a Color</PopoverHeader>
        <PopoverBody className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="h-8 w-8 rounded-full focus:ring-2 focus:ring-offset-2 focus:outline-none"
                style={{ backgroundColor: color }}
                onClick={() => console.log(`Selected color: ${color}`)}
              />
            ))}
          </div>
        </PopoverBody>
        <PopoverFooter>
          <PopoverCloseButton />
        </PopoverFooter>
      </PopoverContent>
    </PopoverRoot>
  )
}

const QuickActionsPopover = () => {
  const actions = [
    {
      icon: <Plus className="h-4 w-4" />,
      label: "New File",
      action: () => console.log("New File"),
    },
    {
      icon: <ImageIcon className="h-4 w-4" />,
      label: "Upload Image",
      action: () => console.log("Upload Image"),
    },
    {
      icon: <Paintbrush className="h-4 w-4" />,
      label: "Edit Colors",
      action: () => console.log("Edit Colors"),
    },
  ]

  return (
    <PopoverRoot>
      <PopoverTrigger>Quick Actions</PopoverTrigger>
      <PopoverContent className="h-48 w-48">
        <PopoverHeader>Quick Actions</PopoverHeader>
        <PopoverBody>
          {actions.map((action, index) => (
            <PopoverButton key={index} onClick={action.action}>
              {action.icon}
              <span>{action.label}</span>
            </PopoverButton>
          ))}
        </PopoverBody>
      </PopoverContent>
    </PopoverRoot>
  )
}

const ImagePreviewPopover = () => {
  return (
    <PopoverRoot>
      <PopoverTrigger>Preview Image</PopoverTrigger>
      <PopoverContent className="h-[500px] w-96">
        <PopoverHeader>Image Preview</PopoverHeader>
        <PopoverBody>
          <img
            src="/placeholder.svg?height=200&width=300"
            alt="Preview"
            className="h-auto w-full rounded-md"
          />
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Image preview description goes here.
          </p>
        </PopoverBody>
        <PopoverFooter>
          <PopoverCloseButton />
        </PopoverFooter>
      </PopoverContent>
    </PopoverRoot>
  )
}

export default function PopoverExamples() {
  return (
    <div className="space-y-8 p-8">
      <div className="grid gap-36 md:grid-cols-2">
        <div className="flex flex-col flex-wrap gap-24">
          <PopoverInput />
          <ColorPickerPopover />
        </div>
        <div className="flex flex-col flex-wrap gap-24">
          <QuickActionsPopover />
          <ImagePreviewPopover />
        </div>
      </div>
    </div>
  )
}

"use client"

import React from "react"
import { Image as ImageIcon, Paintbrush, Plus, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import {
  FloatingPanelBody,
  FloatingPanelButton,
  FloatingPanelCloseButton,
  FloatingPanelContent,
  FloatingPanelFooter,
  FloatingPanelForm,
  FloatingPanelHeader,
  FloatingPanelLabel,
  FloatingPanelRoot,
  FloatingPanelSubmitButton,
  FloatingPanelTextarea,
  FloatingPanelTrigger,
} from "../ui/floating-panel"

function FloatingPanelInput() {
  const handleSubmit = (note: string) => {
    console.log("Submitted note:", note)
  }

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Add Note"
        className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center space-x-2 rounded-md px-4 py-2 transition-colors"
      >
        <span>Add Note</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-80">
        <FloatingPanelForm onSubmit={handleSubmit}>
          <FloatingPanelBody>
            <FloatingPanelLabel htmlFor="note-input">Note</FloatingPanelLabel>
            <FloatingPanelTextarea id="note-input" className="min-h-[100px]" />
          </FloatingPanelBody>
          <FloatingPanelFooter>
            <FloatingPanelCloseButton />
            <FloatingPanelSubmitButton />
          </FloatingPanelFooter>
        </FloatingPanelForm>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const ColorPickerFloatingPanel = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F1",
    "#33FFF1",
    "#F1FF33",
  ]

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Choose Color"
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 flex items-center space-x-2 rounded-md px-4 py-2 transition-colors"
      >
        <span>Choose Color</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-64">
        <FloatingPanelBody>
          <div className="grid grid-cols-3 gap-2">
            <AnimatePresence>
              {colors.map((color) => (
                <motion.button
                  key={color}
                  className="focus:ring-primary h-12 w-12 rounded-full focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  style={{ backgroundColor: color }}
                  onClick={() => console.log(`Selected color: ${color}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </AnimatePresence>
          </div>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const QuickActionsFloatingPanel = () => {
  const actions = [
    {
      icon: <Plus className="h-4 w-4" />,
      label: "New File",
      action: () => console.log("New File"),
    },
    {
      icon: <ImageIcon className="h-4 w-4" />,
      label: "Upload Image",
      action: () => console.log("Upload Image"),
    },
    {
      icon: <Paintbrush className="h-4 w-4" />,
      label: "Edit Colors",
      action: () => console.log("Edit Colors"),
    },
  ]

  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Quick Actions"
        className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center space-x-2 rounded-md px-4 py-2 transition-colors"
      >
        <span>Quick Actions</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-56">
        <FloatingPanelBody>
          <AnimatePresence>
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: index * 0.1 }}
              >
                <FloatingPanelButton
                  onClick={action.action}
                  className="hover:bg-muted flex w-full items-center space-x-2 rounded-md px-2 py-1 transition-colors"
                >
                  {action.icon}
                  <span>{action.label}</span>
                </FloatingPanelButton>
              </motion.div>
            ))}
          </AnimatePresence>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

const ImagePreviewFloatingPanel = () => {
  return (
    <FloatingPanelRoot>
      <FloatingPanelTrigger
        title="Preview Image"
        className="bg-muted text-muted-foreground hover:bg-muted/90 flex items-center space-x-2 rounded-md px-4 py-2 transition-colors"
      >
        <span>Preview Image</span>
      </FloatingPanelTrigger>
      <FloatingPanelContent className="w-80">
        <FloatingPanelBody>
          <motion.img
            src="/placeholder.svg?height=200&width=300"
            alt="Preview"
            className="h-auto w-full rounded-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-muted-foreground mt-2 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Image preview description goes here.
          </motion.p>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <FloatingPanelCloseButton />
          <FloatingPanelButton
            onClick={() => console.log("Download clicked")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-3 py-1 transition-colors"
          >
            Download
          </FloatingPanelButton>
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanelRoot>
  )
}

export default function FloatingPanelExamples() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="mb-4 text-3xl font-bold">FloatingPanel Examples</h1>
      <div className="flex flex-col flex-wrap gap-4 md:flex-row">
        <FloatingPanelInput />
        <ColorPickerFloatingPanel />
        <QuickActionsFloatingPanel />
        <ImagePreviewFloatingPanel />
      </div>
    </div>
  )
}

"use client"

import { useId } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen"

const formFieldClassName =
  "w-full rounded-lg border-0 bg-primary-foreground px-4 text-primary shadow-none placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"

function ExpandableScreenDemo() {
  const nameId = useId()
  const emailId = useId()
  const websiteId = useId()
  const companySizeId = useId()
  const messageId = useId()
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
    >
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 sm:py-20">
        <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6">
          <h1 className="text-foreground max-w-2xl text-4xl leading-[90%] font-normal tracking-[-0.03em] mix-blend-exclusion sm:text-5xl md:text-6xl lg:text-7xl">
            Join the waitlist
          </h1>

          <p className="text-foreground max-w-2xl px-4 text-base leading-[160%] sm:text-lg md:text-xl">
            Be among the first to experience our next-generation platform. Get
            early access to exclusive features and help shape the future of
            productivity.
          </p>

          <ExpandableScreenTrigger>
            <div className="bg-primary font-regular text-primary-foreground h-15 px-6 py-3 text-lg tracking-[-0.01em] sm:px-8 sm:text-xl">
              Get early access
            </div>
          </ExpandableScreenTrigger>
        </div>
      </div>

      <ExpandableScreenContent className="bg-primary">
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col items-center gap-8 p-6 sm:p-10 lg:flex-row lg:gap-16 lg:p-16">
          <div className="flex w-full flex-1 flex-col justify-center space-y-3">
            <h2 className="text-primary-foreground text-3xl leading-none font-medium tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Reserve your spot
            </h2>

            <div className="space-y-4 pt-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-primary-foreground/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
                  <svg
                    className="text-primary-foreground h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-foreground text-sm leading-[150%] sm:text-base">
                    Get priority access to new features and updates before
                    public release.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-primary-foreground/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
                  <svg
                    className="text-primary-foreground h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Icon</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-primary-foreground text-sm leading-[150%] sm:text-base">
                    Join a community of early adopters and help influence our
                    product roadmap.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-primary-foreground/20 mt-6 border-t pt-6 sm:mt-8 sm:pt-8">
              <p className="text-primary-foreground mb-4 text-lg leading-[150%] sm:text-xl lg:text-2xl">
                The waitlist has been a game-changer for our workflow. Highly
                recommend joining early.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Alex Rivera"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                />
                <div>
                  <p className="text-primary-foreground text-base sm:text-lg lg:text-xl">
                    Alex Rivera
                  </p>
                  <p className="text-primary-foreground/70 text-sm sm:text-base">
                    Early Access Member
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-1">
            <form className="space-y-4 sm:space-y-5">
              <div>
                <Label
                  htmlFor={nameId}
                  className="text-primary-foreground mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] uppercase"
                >
                  FULL NAME *
                </Label>
                <Input
                  type="text"
                  id={nameId}
                  name="name"
                  className={cn(formFieldClassName, "h-10 py-2.5")}
                />
              </div>

              <div>
                <Label
                  htmlFor={emailId}
                  className="text-primary-foreground mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] uppercase"
                >
                  EMAIL *
                </Label>
                <Input
                  type="email"
                  id={emailId}
                  name="email"
                  className={cn(formFieldClassName, "h-10 py-2.5")}
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Label
                    htmlFor={websiteId}
                    className="text-primary-foreground mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] uppercase"
                  >
                    USE CASE
                  </Label>
                  <Input
                    type="text"
                    id={websiteId}
                    name="use-case"
                    placeholder="e.g., Project management, Team collaboration"
                    className={cn(formFieldClassName, "h-10 py-2.5")}
                  />
                </div>
                <div className="w-full sm:w-32">
                  <Label
                    htmlFor={companySizeId}
                    className="text-primary-foreground mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] uppercase"
                  >
                    TEAM SIZE
                  </Label>
                  <Select name="team-size">
                    <SelectTrigger
                      id={companySizeId}
                      className={cn(formFieldClassName, "h-10 py-2.5")}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo">Solo</SelectItem>
                      <SelectItem value="2-5">2-5</SelectItem>
                      <SelectItem value="6-20">6-20</SelectItem>
                      <SelectItem value="21-50">21-50</SelectItem>
                      <SelectItem value="50+">50+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label
                  htmlFor={messageId}
                  className="text-primary-foreground mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] uppercase"
                >
                  WHAT ARE YOU MOST EXCITED ABOUT?
                </Label>
                <Textarea
                  id={messageId}
                  name="excited-about"
                  rows={3}
                  placeholder="Tell us what features you're looking forward to..."
                  className={cn(formFieldClassName, "resize-none py-3")}
                />
              </div>

              <Button
                type="submit"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-10 w-full rounded-full px-8 py-2.5 font-medium tracking-[-0.03em] transition-colors"
              >
                Join waitlist
              </Button>
            </form>
          </div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  )
}

export default ExpandableScreenDemo

"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowLeft,
  BookOpen,
  Building,
  Building2,
  CircleDashed,
  Code2,
  Download,
  Megaphone,
  Palette,
  Rocket,
  TrendingUp,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  ChoiceGroup,
  FeatureCarousel,
  Onboarding,
  TipsList,
  useOnboarding,
} from "../ui/onboarding"

const STEP_CONFIG = [
  {
    title: "Welcome to AI SDK Agents",
    description: "Start shipping ai agents that actually work.",
  },
  {
    title: "Personalize your experience",
    description: "Tell us about yourself so we can tailor the experience",
  },
  {
    title: "You're ready to go!",
    description: "A few tips to get the most out of AI SDK Agents",
  },
]

export const FEATURES = [
  {
    id: "source-code",
    icon: Code2, // swap Sparkles → Code2
    title: "Full Stack Source Code",
    description:
      "Browse and copy the complete source code for every pattern directly from the Source Code tab.",
    image: "/component-images/onboarding/onboarding-source-code.png",
  },
  {
    id: "skills",
    icon: BookOpen, // swap ImagePlus → BookOpen (or similar)
    title: "Copy Skills & Critical Files",
    description:
      "Copy agent skills and critical files to supercharge your AI-powered workflows.",
    image: "/component-images/onboarding/onboarding-skills.png",
  },
  {
    id: "download",
    icon: Download, // swap Lightbulb → Download
    title: "Download as Next.js App",
    description:
      "Download any pattern as a fully working Next.js application, ready to run locally.",
    image: "/component-images/onboarding/onboarding-nextjs.png",
  },
] as const

export const ROLES = [
  { id: "designer", label: "Designer", icon: Palette },
  { id: "founder", label: "Founder", icon: Rocket },
  { id: "sales", label: "Sales", icon: TrendingUp },
  { id: "freelancer", label: "Freelancer", icon: Building2 },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "developer", label: "Developer", icon: Code2 },
  { id: "agency", label: "Agency", icon: Building },
  { id: "other", label: "Other", icon: CircleDashed },
] as const

export const GOALS = [
  { id: "ai-agents", label: "Building AI agents" },
  { id: "chatbots", label: "Chatbots & assistants" },
  { id: "automation", label: "Workflow automation" },
  { id: "rag", label: "RAG & search" },
  { id: "prototyping", label: "Rapid prototyping" },
  { id: "other", label: "Something else" },
] as const

export const TIPS = [
  {
    number: 1,
    text: "Browse patterns by use case to find the right agent architecture for your project.",
  },
  {
    number: 2,
    text: "Use the Download as Next.js App button to get a fully working local project in seconds.",
  },
  {
    number: 3,
    text: "Copy skills and critical files to quickly skill up claude code and cursor.",
  },
] as const

export const TOTAL_STEPS = 3
export const MAX_STEP_VALUE = FEATURES.length - 1

// ============================================================================
// Headless Primitives Demo (composable, uses shadcn tokens)
// ============================================================================

export default function OnboardingDemo() {
  return <HeadlessOnboardingDemo />
}

export function HeadlessOnboardingDemo() {
  const [open, setOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Headless Onboarding
      </Button>
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogContent
          className="w-full max-w-[calc(100dvw-2rem)] border-none bg-transparent p-0 shadow-none sm:max-w-3xl"
          showCloseButton={false}
        >
          <div className="bg-muted w-full rounded-2xl p-[2px] md:p-2">
            <Onboarding
              canGoNext={(step) =>
                step === 1 ||
                (step === 2 && selectedGoal !== null) ||
                step === 3
              }
              className="relative overflow-hidden"
              maxStepValue={MAX_STEP_VALUE}
              onComplete={() => setOpen(false)}
              totalSteps={3}
            >
              <HeadlessOnboardingHeader />
              <div className="my-8 min-h-[280px]">
                <Onboarding.Step step={1}>
                  <HeadlessFeatureStep />
                </Onboarding.Step>
                <Onboarding.Step step={2}>
                  <HeadlessRoleStep
                    onGoalSelect={setSelectedGoal}
                    onRoleSelect={setSelectedRole}
                    selectedGoal={selectedGoal}
                    selectedRole={selectedRole}
                  />
                </Onboarding.Step>
                <Onboarding.Step step={3}>
                  <HeadlessTipsStep />
                </Onboarding.Step>
              </div>
              <Onboarding.Navigation completeLabel="Start Creating" />
            </Onboarding>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function HeadlessOnboardingHeader() {
  const { currentStep } = useOnboarding()
  const config = STEP_CONFIG[currentStep - 1]

  return (
    <DialogHeader className="!text-center">
      {/* <DialogTitle className="font-normal font-pixel-square text-3xl text-foreground"> */}
      <DialogTitle className="text-foreground font-semibold tracking-tighter md:text-3xl">
        {config.title}
      </DialogTitle>
      <DialogDescription className="text-muted-foreground md:text-base">
        {config.description}
      </DialogDescription>
      <div className="pt-3">
        <Onboarding.StepIndicator />
      </div>
    </DialogHeader>
  )
}

function HeadlessFeatureStep() {
  const { stepValue, setStepValue } = useOnboarding()

  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
      <FeatureCarousel
        className="order-2 flex w-full flex-col gap-3 md:order-1 md:w-1/2"
        onValueChange={setStepValue}
        totalItems={FEATURES.length}
        value={stepValue}
      >
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon
          const isActive = stepValue === index
          return (
            <FeatureCarousel.Item index={index} key={feature.id}>
              <div
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200",
                  isActive
                    ? "border-primary/30 bg-primary/10"
                    : "hover:bg-muted border-transparent"
                )}
              >
                <Icon
                  className={cn(
                    "mt-0.5 size-5 shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                <div>
                  <p className="text-foreground text-sm font-medium">
                    {feature.title}
                  </p>
                  {isActive && (
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </FeatureCarousel.Item>
          )
        })}
      </FeatureCarousel>
      <div className="order-1 w-full md:order-2 md:w-1/2">
        <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-xl border">
          <Image
            alt={FEATURES[stepValue].title}
            className="object-cover transition-opacity duration-300"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            src={FEATURES[stepValue].image}
          />
        </div>
      </div>
    </div>
  )
}

function HeadlessRoleStep({
  selectedRole,
  onRoleSelect,
  selectedGoal,
  onGoalSelect,
}: {
  selectedRole: string | null
  onRoleSelect: (v: string) => void
  selectedGoal: string | null
  onGoalSelect: (v: string) => void
}) {
  const { handleNext } = useOnboarding()
  const [question, setQuestion] = useState(selectedGoal ? 2 : 1)

  return (
    <div className="flex flex-col gap-4">
      {question === 1 ? (
        <div className="flex flex-col gap-4" key="q1">
          <div className="flex items-center gap-2">
            <span className="bg-muted text-muted-foreground inline-flex size-6 items-center justify-center rounded-lg text-sm">
              1
            </span>
            <span className="text-foreground text-base font-medium">
              What best describes you?
            </span>
          </div>
          <ChoiceGroup
            className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3"
            name="Select your role"
            onValueChange={(v) => {
              onRoleSelect(v)
              setTimeout(() => setQuestion(2), 300)
            }}
            orientation="grid"
            value={selectedRole}
          >
            {ROLES.map((role) => {
              const Icon = role.icon
              const isSelected = selectedRole === role.id
              return (
                <ChoiceGroup.Item
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200",
                    isSelected
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                  key={role.id}
                  value={role.id}
                >
                  <Icon className="text-muted-foreground size-4 shrink-0" />
                  <span>{role.label}</span>
                </ChoiceGroup.Item>
              )
            })}
          </ChoiceGroup>
          <p className="text-muted-foreground text-sm">Question 1 of 2</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4" key="q2">
          <div className="flex items-center gap-2">
            <span className="bg-muted text-muted-foreground inline-flex size-6 items-center justify-center rounded-lg text-sm">
              2
            </span>
            <span className="text-foreground text-base font-medium">
              What do you want to create?
            </span>
          </div>
          <ChoiceGroup
            className="grid grid-cols-2 gap-2 sm:gap-3"
            name="Select your goal"
            onValueChange={(v) => {
              onGoalSelect(v)
              setTimeout(() => handleNext(), 300)
            }}
            orientation="grid"
            value={selectedGoal}
          >
            {GOALS.map((goal) => {
              const isSelected = selectedGoal === goal.id
              return (
                <ChoiceGroup.Item
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200",
                    isSelected
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-border bg-background text-foreground hover:bg-muted"
                  )}
                  key={goal.id}
                  value={goal.id}
                >
                  <span>{goal.label}</span>
                </ChoiceGroup.Item>
              )
            })}
          </ChoiceGroup>
          <div className="flex items-center justify-between">
            <Button
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              onClick={() => setQuestion(1)}
              type="button"
              size="sm"
              variant="ghost"
            >
              <ArrowLeft className="size-4" />
              Back to question 1
            </Button>
            <p className="text-muted-foreground text-sm">Question 2 of 2</p>
          </div>
        </div>
      )}
    </div>
  )
}

function HeadlessTipsStep() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-6">
      <div className="order-2 w-full md:order-1 md:w-1/2">
        <TipsList
          className="[&_[data-slot=tips-list-title]]:text-muted-foreground flex h-full flex-col [&_[data-slot=tips-list-items]]:flex [&_[data-slot=tips-list-items]]:h-full [&_[data-slot=tips-list-items]]:flex-col [&_[data-slot=tips-list-items]]:justify-between [&_[data-slot=tips-list-items]]:gap-4 [&_[data-slot=tips-list-title]]:not-sr-only [&_[data-slot=tips-list-title]]:mb-4 [&_[data-slot=tips-list-title]]:text-xs [&_[data-slot=tips-list-title]]:font-semibold [&_[data-slot=tips-list-title]]:tracking-wider [&_[data-slot=tips-list-title]]:uppercase"
          title="Tips"
        >
          {TIPS.map((tip) => (
            <TipsList.Item
              className="[&_[data-slot=tips-list-item-number]]:bg-muted [&_[data-slot=tips-list-item-number]]:text-muted-foreground flex items-start gap-3 [&_[data-slot=tips-list-item-number]]:inline-flex [&_[data-slot=tips-list-item-number]]:size-6 [&_[data-slot=tips-list-item-number]]:shrink-0 [&_[data-slot=tips-list-item-number]]:items-center [&_[data-slot=tips-list-item-number]]:justify-center [&_[data-slot=tips-list-item-number]]:rounded-lg [&_[data-slot=tips-list-item-number]]:text-sm"
              key={tip.number}
              number={tip.number}
            >
              <p className="text-foreground text-sm leading-relaxed">
                {tip.text}
              </p>
            </TipsList.Item>
          ))}
        </TipsList>
      </div>
      <div className="order-1 w-full md:order-2 md:w-1/2">
        <div className="bg-background relative aspect-video w-full overflow-hidden rounded-xl border md:aspect-[4/3]">
          <Image
            src="/component-images/onboarding/onboarding-tip1.png"
            alt="Onboarding"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

/** SKILL-DESIGN: standard 3-layer surface + transition-shadow */
const toolbarShellClass = cn(
  "bg-background transition-shadow duration-200",
  "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.04)]",
  "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(255,255,255,0.03),0px_2px_4px_0px_rgba(0,0,0,0.2)]"
)

/** SKILL-DESIGN: lighter 2-layer for nested well */
const toolbarInnerWellClass = cn(
  "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.05)]",
  "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08),0px_1px_2px_-1px_rgba(255,255,255,0.04)]"
)

const springTransition = {
  type: "spring" as const,
  bounce: 0,
  duration: 0.25,
}

function scheduleAfterLayout(fn: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn)
  })
}

export interface WizardStep {
  id: string
  title: string
  description: string
  icon:
    | React.ComponentType<{ className?: string }>
    | React.ReactElement<{ className?: string }>
  content: React.ReactNode
}

export interface WizardNavigateContext {
  fromStepId: string | null
  toStepId: string
  fromIndex: number
  toIndex: number
}

type StepNavigationResult =
  | { ok: true }
  | { ok: false; context: WizardNavigateContext }

function evaluateStepNavigation({
  steps,
  fromId,
  toId,
  canNavigateToStep,
  skipValidationForBackward,
}: {
  steps: WizardStep[]
  fromId: string | null
  toId: string
  canNavigateToStep: ((context: WizardNavigateContext) => boolean) | undefined
  skipValidationForBackward: boolean
}): StepNavigationResult {
  if (!fromId || fromId === toId) {
    return { ok: true }
  }

  const toIndex = steps.findIndex((s) => s.id === toId)
  const fromIndex = steps.findIndex((s) => s.id === fromId)
  if (toIndex < 0 || fromIndex < 0) {
    return { ok: true }
  }

  if (!canNavigateToStep) {
    return { ok: true }
  }

  const goingBackward = toIndex < fromIndex
  if (skipValidationForBackward && goingBackward) {
    return { ok: true }
  }

  const context: WizardNavigateContext = {
    fromStepId: fromId,
    toStepId: toId,
    fromIndex,
    toIndex,
  }

  if (!canNavigateToStep(context)) {
    return { ok: false, context }
  }

  return { ok: true }
}

export interface WizardExpandableContextValue {
  activeStepId: string | null
  activeIndex: number
  totalSteps: number
  isLastStep: boolean
  canGoBack: boolean
  /** False when forward navigation / complete is blocked by validation or flags. */
  canGoNext: boolean
  goNext: () => void
  goBack: () => void
  complete: () => void
}

const WizardExpandableContext =
  createContext<WizardExpandableContextValue | null>(null)

export function useWizardExpandable(): WizardExpandableContextValue {
  const ctx = useContext(WizardExpandableContext)
  if (!ctx) {
    throw new Error("useWizardExpandable must be used within WizardExpandable")
  }
  return ctx
}

export interface WizardExpandableProps {
  steps: WizardStep[]
  badgeText?: string

  className?: string
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  activeStep?: string | null
  onActiveStepChange?: (stepId: string | null) => void

  /**
   * Return false to block moving from the current step to `toStepId`.
   * Not called when opening the first step (`fromStepId` is null), closing the wizard,
   * or when `skipValidationForBackward` is true and the target step is before the current one.
   */
  canNavigateToStep?: (context: WizardNavigateContext) => boolean
  /**
   * When true, navigating to an earlier step does not call `canNavigateToStep`.
   * @default true
   */
  skipValidationForBackward?: boolean
  /** Called when navigation was blocked by `canNavigateToStep` returning false. */
  onNavigateBlocked?: (context: WizardNavigateContext) => void

  /**
   * When `false`, disables Next and the Complete action. When `undefined`, only
   * `canNavigateToStep` gates forward moves (and Complete stays enabled unless you set this).
   */
  canGoNext?: boolean
  /** @default true */
  showNavigation?: boolean
  backLabel?: string
  nextLabel?: string
  completeLabel?: string
  /** Called when the user activates Complete on the last step. */
  onComplete?: () => void
}

const WizardExpandableInner = React.memo<WizardExpandableProps>(
  function WizardExpandableInner({
    steps,
    badgeText,

    className,
    expanded: controlledExpanded,
    onExpandedChange,
    activeStep: controlledActiveStep,
    onActiveStepChange,
    canNavigateToStep,
    skipValidationForBackward = true,
    onNavigateBlocked,
    canGoNext: canGoNextProp,
    showNavigation = true,
    backLabel = "Back",
    nextLabel = "Next",
    completeLabel = "Finish",
    onComplete,
  }) {
    const reduceMotion = useReducedMotion()
    const baseId = useId()
    const panelId = `${baseId}-panel`
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

    const [active, setActive] = useControllableState<string | null>({
      prop: controlledActiveStep,
      defaultProp: null,
      onChange: onActiveStepChange,
    })

    const [isOpen, setIsOpen] = useControllableState({
      prop: controlledExpanded,
      defaultProp: false,
      onChange: onExpandedChange,
    })

    const [hoveredTabIndex, setHoveredTabIndex] = useState<number | null>(null)

    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const [contentRef, contentBounds] = useMeasure()
    const [menuRef, menuBounds] = useMeasure()
    const menuContainerRef = useRef<HTMLElement | null>(null)
    const ref = useRef<HTMLDivElement>(null)
    const [maxWidth, setMaxWidth] = useState(0)

    const heightContent = contentBounds.height
    const widthContainer = menuBounds.width

    const scrollBehavior: ScrollBehavior = reduceMotion ? "auto" : "smooth"

    const motionTransition = useMemo(
      () => (reduceMotion ? { duration: 0.01 } : springTransition),
      [reduceMotion]
    )

    const handleClickOutside = useCallback(() => {
      setIsOpen(false)
      setActive(null)
    }, [setIsOpen, setActive])

    useClickOutside(ref, handleClickOutside)

    useEffect(() => {
      if (!widthContainer || maxWidth > 0) {
        return
      }
      setMaxWidth(widthContainer)
    }, [widthContainer, maxWidth])

    const scrollButtonIntoView = useCallback(
      (
        currentIndex: number,
        priorIndex: number | null,
        behavior: ScrollBehavior
      ) => {
        if (!menuContainerRef.current) {
          return
        }

        const isMovingForward = priorIndex !== null && currentIndex > priorIndex
        const isMovingBackward =
          priorIndex !== null && currentIndex < priorIndex

        let targetIndex = currentIndex

        if (isMovingForward) {
          const nextIndex = currentIndex + 1
          if (nextIndex < steps.length) {
            targetIndex = nextIndex
          }
        } else if (isMovingBackward) {
          const prevIndex = currentIndex - 1
          if (prevIndex >= 0) {
            targetIndex = prevIndex
          }
        }

        const viewport = menuContainerRef.current.querySelector(
          '[data-slot="scroll-area-viewport"]'
        ) as HTMLElement | null

        const targetButton = menuContainerRef.current.querySelector(
          `[data-step-index="${targetIndex}"]`
        ) as HTMLElement | null

        if (viewport && targetButton) {
          scrollElementToCenterInViewport(viewport, targetButton, behavior)
        }
      },
      [steps.length]
    )

    const openStep = useCallback(
      (item: string, priorIndex: number | null) => {
        const currentIndex = steps.findIndex((step) => step.id === item)
        setActive(item)
        setIsOpen(true)

        if (currentIndex >= 0) {
          scheduleAfterLayout(() => {
            scrollButtonIntoView(currentIndex, priorIndex, scrollBehavior)
          })
          setPreviousIndex(currentIndex)
        }
      },
      [steps, setActive, setIsOpen, scrollButtonIntoView, scrollBehavior]
    )

    const tryNavigateToStep = useCallback(
      (item: string, priorIndex: number | null): boolean => {
        const result = evaluateStepNavigation({
          steps,
          fromId: active,
          toId: item,
          canNavigateToStep,
          skipValidationForBackward,
        })
        if (result.ok === false) {
          onNavigateBlocked?.(result.context)
          return false
        }
        openStep(item, priorIndex)
        return true
      },
      [
        active,
        canNavigateToStep,
        onNavigateBlocked,
        openStep,
        skipValidationForBackward,
        steps,
      ]
    )

    const activeIndex = useMemo(
      () => (active ? steps.findIndex((s) => s.id === active) : -1),
      [active, steps]
    )

    const isLastStep = activeIndex >= 0 && activeIndex === steps.length - 1
    const nextStepId =
      activeIndex >= 0 && activeIndex < steps.length - 1
        ? steps[activeIndex + 1]?.id
        : undefined
    const prevStepId = activeIndex > 0 ? steps[activeIndex - 1]?.id : undefined

    const forwardNavOk = useMemo(() => {
      if (!nextStepId || active === null) {
        return true
      }
      return evaluateStepNavigation({
        steps,
        fromId: active,
        toId: nextStepId,
        canNavigateToStep,
        skipValidationForBackward,
      }).ok
    }, [
      active,
      canNavigateToStep,
      nextStepId,
      skipValidationForBackward,
      steps,
    ])

    const nextDisabled = !forwardNavOk || canGoNextProp === false
    const completeDisabled = canGoNextProp === false
    const canGoBack = isOpen && active !== null && activeIndex > 0

    const effectiveCanGoNext = isLastStep
      ? canGoNextProp !== false
      : forwardNavOk && canGoNextProp !== false

    const handleWizardBack = useCallback(() => {
      if (!prevStepId) {
        return
      }
      const moved = tryNavigateToStep(prevStepId, previousIndex)
      if (moved) {
        queueMicrotask(() => tabRefs.current[activeIndex - 1]?.focus())
      }
    }, [activeIndex, previousIndex, prevStepId, tryNavigateToStep])

    const handleWizardNext = useCallback(() => {
      if (!nextStepId || isLastStep) {
        return
      }
      const moved = tryNavigateToStep(nextStepId, previousIndex)
      if (moved) {
        queueMicrotask(() => tabRefs.current[activeIndex + 1]?.focus())
      }
    }, [activeIndex, isLastStep, nextStepId, previousIndex, tryNavigateToStep])

    const handleWizardComplete = useCallback(() => {
      if (completeDisabled) {
        return
      }
      onComplete?.()
    }, [completeDisabled, onComplete])

    const handleNavClick = useCallback(
      (item: string) => {
        if (active === item && isOpen) {
          setIsOpen(false)
          setActive(null)
          return
        }

        tryNavigateToStep(item, previousIndex)
      },
      [active, isOpen, previousIndex, setActive, setIsOpen, tryNavigateToStep]
    )

    useEffect(() => {
      if (!isOpen) {
        return
      }

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key !== "Escape") {
          return
        }
        const root = ref.current
        if (!root?.contains(document.activeElement)) {
          return
        }
        event.preventDefault()
        setIsOpen(false)
        setActive(null)
        tabRefs.current[0]?.focus()
      }

      document.addEventListener("keydown", onKeyDown)
      return () => document.removeEventListener("keydown", onKeyDown)
    }, [isOpen, setActive, setIsOpen])

    const handleTabKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        const { key } = event
        let nextIndex: number | undefined

        if (key === "ArrowRight" || key === "ArrowLeft") {
          event.preventDefault()
          const delta = key === "ArrowRight" ? 1 : -1
          nextIndex = (index + delta + steps.length) % steps.length
        } else if (key === "Home") {
          event.preventDefault()
          nextIndex = 0
        } else if (key === "End") {
          event.preventDefault()
          nextIndex = steps.length - 1
        }

        if (nextIndex === undefined) {
          return
        }

        const nextId = steps[nextIndex]?.id
        if (!nextId) {
          return
        }

        const moved = tryNavigateToStep(nextId, previousIndex)
        if (!moved) {
          return
        }

        if (key === "ArrowRight" || key === "ArrowLeft") {
          queueMicrotask(() => tabRefs.current[nextIndex]?.focus())
        } else {
          tabRefs.current[nextIndex]?.focus()
        }
      },
      [previousIndex, steps, tryNavigateToStep]
    )

    const renderContent = useCallback(() => {
      if (!active) {
        return null
      }

      const step = steps.find((s) => s.id === active)
      if (!step) {
        return null
      }

      const titleId = `${baseId}-title-${step.id}`
      const listVariants = {
        initial: {},
        animate: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.06,
            delayChildren: reduceMotion ? 0 : 0.02,
          },
        },
        exit: {
          transition: { staggerChildren: 0.03, staggerDirection: -1 as const },
        },
      }

      const itemVariants = {
        initial: reduceMotion
          ? { opacity: 0.001 }
          : { opacity: 0, y: 8, filter: "blur(4px)" },
        animate: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: reduceMotion ? 0.01 : 0.22,
            ease: [0.23, 1, 0.32, 1] as const,
          },
        },
        exit: reduceMotion
          ? {
              opacity: 0,
              transition: { duration: 0.1, ease: [0.23, 1, 0.32, 1] as const },
            }
          : {
              opacity: 0,
              y: -10,
              filter: "blur(4px)",
              transition: { duration: 0.16, ease: [0.4, 0, 1, 1] as const },
            },
      }

      return (
        <motion.div
          animate="animate"
          aria-labelledby={`${baseId}-tab-${step.id}`}
          className="space-y-4 pb-2"
          exit="exit"
          id={panelId}
          initial="initial"
          key={step.id}
          role="tabpanel"
          variants={listVariants}
        >
          <div className="space-y-2">
            <motion.h3
              className="text-balance font-medium text-foreground text-lg"
              id={titleId}
              variants={itemVariants}
            >
              {step.title}
            </motion.h3>
            <motion.p
              className="text-pretty text-muted-foreground text-sm"
              variants={itemVariants}
            >
              {step.description}
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>{step.content}</motion.div>
          {showNavigation ? (
            <motion.div className="pt-1" variants={itemVariants}>
              <fieldset
                aria-label="Wizard navigation"
                className="flex min-w-0 gap-2 sm:gap-3"
              >
                <Button
                  className="min-h-11 flex-1 sm:min-h-10"
                  disabled={!canGoBack}
                  onClick={handleWizardBack}
                  type="button"
                  variant="outline"
                >
                  {backLabel}
                </Button>
                {isLastStep ? (
                  <Button
                    className="min-h-11 flex-1 sm:min-h-10"
                    disabled={completeDisabled}
                    onClick={handleWizardComplete}
                    type="button"
                  >
                    {completeLabel}
                  </Button>
                ) : (
                  <Button
                    className="min-h-11 flex-1 sm:min-h-10"
                    disabled={nextDisabled}
                    onClick={handleWizardNext}
                    type="button"
                  >
                    {nextLabel}
                  </Button>
                )}
              </fieldset>
            </motion.div>
          ) : null}
        </motion.div>
      )
    }, [
      active,
      backLabel,
      baseId,
      canGoBack,
      completeDisabled,
      completeLabel,
      handleWizardBack,
      handleWizardComplete,
      handleWizardNext,
      isLastStep,
      nextDisabled,
      nextLabel,
      panelId,
      reduceMotion,
      showNavigation,
      steps,
    ])

    const wizardContextValue = useMemo<WizardExpandableContextValue>(
      () => ({
        activeStepId: active,
        activeIndex,
        totalSteps: steps.length,
        isLastStep,
        canGoBack,
        canGoNext: effectiveCanGoNext,
        goNext: handleWizardNext,
        goBack: handleWizardBack,
        complete: handleWizardComplete,
      }),
      [
        active,
        activeIndex,
        canGoBack,
        effectiveCanGoNext,
        handleWizardBack,
        handleWizardComplete,
        handleWizardNext,
        isLastStep,
        steps.length,
      ]
    )

    const navigationButtons = useMemo(
      () =>
        steps.map((step, index) => ({
          id: step.id,
          label: step.title,
          step: (index + 1).toString(),
          onClick: () => handleNavClick(step.id),
          isActive: active === step.id,
          isFirst: index === 0,
          isLast: index === steps.length - 1,
        })),
      [steps, active, handleNavClick]
    )

    return (
      <WizardExpandableContext.Provider value={wizardContextValue}>
        <div
          className={cn(
            "mx-auto w-full max-w-sm space-y-2 px-2 sm:max-w-lg sm:px-0",
            className
          )}
        >
          {badgeText && (
            <Badge
              className="border-border bg-muted text-muted-foreground"
              variant="outline"
            >
              {badgeText}
            </Badge>
          )}

          <MotionConfig transition={motionTransition}>
            <div
              className={cn(
                "w-full overflow-hidden rounded-[calc(var(--radius)+var(--toolbar-gutter))] antialiased",
                toolbarShellClass
              )}
              ref={ref}
              style={{ "--toolbar-gutter": "0.5rem" } as React.CSSProperties}
            >
              <div className="min-w-0">
                <div
                  className={cn(
                    "relative z-10",
                    isOpen ? "border-border/60 border-b" : ""
                  )}
                >
                  <ScrollArea
                    className="w-full"
                    maskHeight={16}
                    ref={(element) => {
                      if (element) {
                        menuContainerRef.current = element
                        menuRef(element)
                      }
                    }}
                    viewportClassName="scrollbar-hide"
                  >
                    <div
                      aria-label="Wizard steps"
                      className="flex w-max min-w-full touch-pan-x items-center p-px"
                      role="tablist"
                    >
                      {navigationButtons.map((button, index) => {
                        const tabFocusIndex =
                          active === null ? index === 0 : button.isActive

                        const isImmediatelyRightOfActive =
                          index > 0 &&
                          active !== null &&
                          steps[index - 1]?.id === active

                        const isImmediatelyLeftOfActive =
                          index < steps.length - 1 &&
                          active !== null &&
                          steps[index + 1]?.id === active

                        const activeTabFlushLeftWithHoveredNeighbor =
                          button.isActive &&
                          index > 0 &&
                          hoveredTabIndex === index - 1

                        const activeTabFlushRightWithHoveredNeighbor =
                          button.isActive &&
                          index < steps.length - 1 &&
                          hoveredTabIndex === index + 1

                        return (
                          <button
                            aria-controls={panelId}
                            aria-selected={button.isActive}
                            className={cn(
                              "flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-md px-3 py-3 text-muted-foreground text-sm outline-none transition-[color,background-color,transform] duration-150 ease-out sm:min-h-0 sm:px-4 sm:py-4",
                              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                              "active:scale-[0.98]",
                              button.isFirst &&
                                "rounded-tl-none rounded-bl-none",
                              button.isLast &&
                                "rounded-tr-none rounded-br-none",
                              isImmediatelyRightOfActive && "rounded-l-none",
                              isImmediatelyLeftOfActive && "rounded-r-none",
                              activeTabFlushLeftWithHoveredNeighbor &&
                                "rounded-l-none",
                              activeTabFlushRightWithHoveredNeighbor &&
                                "rounded-r-none",
                              button.isActive
                                ? "rounded-b-none bg-muted/50 font-medium text-foreground"
                                : "hover:bg-muted/60 active:bg-muted/70"
                            )}
                            data-step-index={index}
                            id={`${baseId}-tab-${button.id}`}
                            key={button.id}
                            onClick={button.onClick}
                            onKeyDown={(e) => handleTabKeyDown(e, index)}
                            onMouseEnter={() => setHoveredTabIndex(index)}
                            onMouseLeave={() => setHoveredTabIndex(null)}
                            ref={(el) => {
                              tabRefs.current[index] = el
                            }}
                            role="tab"
                            tabIndex={tabFocusIndex ? 0 : -1}
                            type="button"
                          >
                            <div
                              className={cn(
                                "flex size-5 shrink-0 items-center justify-center rounded-full font-bold text-[10px] tabular-nums leading-none shadow-[0px_1px_1px_0px_hsla(0,0%,0%,0.02)_inset,0px_1px_1px_0px_hsla(0,0%,0%,0.02)_inset,0px_0px_0px_1px_rgba(255,255,255,0.25)] transition-colors duration-200 ease-out sm:size-5 dark:shadow-[0px_1px_1px_0px_hsla(0,0%,100%,0.02)_inset,0px_1px_1px_0px_rgba(255,255,255,0.05)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.05)_inset,0px_0px_1px_0px_rgba(0,0,0,0.25)]",
                                button.isActive
                                  ? "bg-primary/15 text-primary ring-1 ring-primary/25"
                                  : "bg-muted/50 text-muted-foreground"
                              )}
                            >
                              {button.step}
                            </div>
                            <span className="font-medium text-foreground text-xs sm:text-sm">
                              {button.label}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </ScrollArea>
                </div>

                <div className="overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    {isOpen && active ? (
                      <motion.div
                        animate={{ height: heightContent || 0 }}
                        exit={{ height: 0 }}
                        initial={{ height: 0 }}
                        key="expanded-content"
                        transition={motionTransition}
                      >
                        <div
                          className="px-(--toolbar-gutter) pt-0 pb-2"
                          ref={contentRef}
                        >
                          <div
                            className={cn(
                              "rounded-t-none rounded-b-(--radius) bg-muted/50 px-3 pt-4 pb-1",
                              toolbarInnerWellClass
                            )}
                          >
                            <AnimatePresence initial={false} mode="wait">
                              {renderContent()}
                            </AnimatePresence>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </MotionConfig>
        </div>
      </WizardExpandableContext.Provider>
    )
  }
)

WizardExpandableInner.displayName = "WizardExpandableInner"

// ________________________ HOOKS ________________________
interface Bounds {
  left: number
  top: number
  width: number
  height: number
}

function useMeasure(): [
  (node: HTMLElement | null) => void,
  Bounds,
  () => void,
] {
  const [bounds, setBounds] = useState<Bounds>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  })

  const [node, setNode] = useState<HTMLElement | null>(null)
  const observer = useRef<ResizeObserver | null>(null)

  const disconnect = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect()
    }
  }, [])

  const ref = useCallback((node: HTMLElement | null) => {
    setNode(node)
  }, [])

  useEffect(() => {
    if (!node) {
      return
    }

    if (observer.current) {
      observer.current.disconnect()
    }

    observer.current = new ResizeObserver(([entry]) => {
      if (!entry) {
        return
      }
      const borderBox = entry.borderBoxSize?.[0]
      if (borderBox) {
        setBounds({
          left: 0,
          top: 0,
          width: borderBox.inlineSize,
          height: borderBox.blockSize,
        })
        return
      }
      const rect = entry.contentRect
      if (!rect) {
        return
      }
      const { left, top, width, height } = rect
      setBounds({ left, top, width, height })
    })

    observer.current.observe(node)

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [node])

  return [ref, bounds, disconnect]
}

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

function scrollElementToCenterInViewport(
  viewport: HTMLElement,
  target: HTMLElement,
  behavior: ScrollBehavior = "smooth"
) {
  const viewportRect = viewport.getBoundingClientRect()
  const targetRect = target.getBoundingClientRect()
  const targetCenter = targetRect.left + targetRect.width / 2
  const viewportCenter = viewportRect.left + viewportRect.width / 2
  const delta = targetCenter - viewportCenter
  const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth)
  const nextLeft = Math.max(0, Math.min(maxScroll, viewport.scrollLeft + delta))
  viewport.scrollTo({ left: nextLeft, behavior })
}

function useTouchPrimary() {
  const [isTouchPrimary, setIsTouchPrimary] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const controller = new AbortController()
    const { signal } = controller

    const handleTouch = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0
      const prefersTouch = window.matchMedia("(pointer: coarse)").matches
      setIsTouchPrimary(hasTouch && prefersTouch)
    }

    const mq = window.matchMedia("(pointer: coarse)")
    mq.addEventListener("change", handleTouch, { signal })
    window.addEventListener("pointerdown", handleTouch, { signal })

    handleTouch()

    return () => controller.abort()
  }, [])

  return isTouchPrimary
}

// ________________________ MODIFIED SCROLL AREA ________________________
// https://lina.sameer.sh/

const ScrollAreaContext = React.createContext<boolean>(false)

interface ScrollFadeMask {
  top: boolean
  bottom: boolean
  left: boolean
  right: boolean
}

const ScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    viewportClassName?: string
    /**
     * `maskHeight` is the height of the mask in pixels.
     * pass `0` to disable the mask
     * @default 30
     */
    maskHeight?: number
    maskClassName?: string
  }
>(
  (
    {
      className,
      children,
      viewportClassName,
      maskClassName,
      maskHeight = 30,
      ...props
    },
    ref
  ) => {
    const [showMask, setShowMask] = React.useState<ScrollFadeMask>({
      top: false,
      bottom: false,
      left: false,
      right: false,
    })
    const viewportRef = React.useRef<HTMLDivElement>(null)
    const isTouch = useTouchPrimary()

    const checkScrollability = React.useCallback(() => {
      const element = viewportRef.current
      if (!element) {
        return
      }

      const {
        scrollTop,
        scrollLeft,
        scrollWidth,
        clientWidth,
        scrollHeight,
        clientHeight,
      } = element
      setShowMask((prev) => ({
        ...prev,
        top: scrollTop > 0,
        bottom: scrollTop + clientHeight < scrollHeight - 1,
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth - 1,
      }))
    }, [])

    React.useEffect(() => {
      if (typeof window === "undefined") {
        return
      }

      const element = viewportRef.current
      if (!element) {
        return
      }

      const controller = new AbortController()
      const { signal } = controller

      const resizeObserver = new ResizeObserver(checkScrollability)
      resizeObserver.observe(element)

      element.addEventListener("scroll", checkScrollability, { signal })
      window.addEventListener("resize", checkScrollability, { signal })

      checkScrollability()

      return () => {
        controller.abort()
        resizeObserver.disconnect()
      }
    }, [checkScrollability])

    return (
      <ScrollAreaContext.Provider value={isTouch}>
        {isTouch ? (
          <section
            aria-label="Scrollable area"
            aria-roledescription="scroll area"
            className={cn("relative overflow-hidden", className)}
            data-slot="scroll-area"
            ref={ref}
            {...(props as React.HTMLAttributes<HTMLElement>)}
          >
            <div
              className={cn(
                "size-full overflow-auto overscroll-x-contain rounded-[inherit]",
                viewportClassName
              )}
              data-slot="scroll-area-viewport"
              ref={viewportRef}
            >
              {children}
            </div>

            {maskHeight > 0 && (
              <ScrollMask
                className={maskClassName}
                maskHeight={maskHeight}
                showMask={showMask}
              />
            )}
          </section>
        ) : (
          <ScrollAreaPrimitive.Root
            className={cn("relative overflow-hidden", className)}
            data-slot="scroll-area"
            ref={ref}
            {...props}
          >
            <ScrollAreaPrimitive.Viewport
              className={cn(
                "size-full overscroll-x-contain rounded-[inherit]",
                viewportClassName
              )}
              data-slot="scroll-area-viewport"
              ref={viewportRef}
            >
              {children}
            </ScrollAreaPrimitive.Viewport>

            {maskHeight > 0 && (
              <ScrollMask
                className={maskClassName}
                maskHeight={maskHeight}
                showMask={showMask}
              />
            )}
            <ScrollBar />
            <ScrollAreaPrimitive.Corner />
          </ScrollAreaPrimitive.Root>
        )}
      </ScrollAreaContext.Provider>
    )
  }
)

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => {
  const isTouch = React.useContext(ScrollAreaContext)

  if (isTouch) {
    return null
  }

  return (
    <ScrollAreaPrimitive.Scrollbar
      className={cn(
        "data-[state=visible]:fade-in-0 data-[state=hidden]:fade-out-0 flex touch-none select-none p-px transition-[colors] duration-150 hover:bg-muted data-[state=hidden]:animate-out data-[state=visible]:animate-in dark:hover:bg-muted/50",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent px-1 pr-1.25",
        className
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      ref={ref}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        className={cn(
          "relative flex-1 origin-center rounded-full bg-border transition-[scale]",
          orientation === "vertical" && "my-1 active:scale-y-95",
          orientation === "horizontal" && "active:scale-x-98"
        )}
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
})

ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName

const ScrollMask = ({
  showMask,
  maskHeight,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  showMask: ScrollFadeMask
  maskHeight: number
}) => {
  return (
    <>
      <div
        {...props}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-10",
          "before:absolute before:inset-x-0 before:top-0 before:transition-[height,opacity] before:duration-300 before:content-['']",
          "after:absolute after:inset-x-0 after:bottom-0 after:transition-[height,opacity] after:duration-300 after:content-['']",
          "before:h-(--top-fade-height) after:h-(--bottom-fade-height)",
          showMask.top ? "before:opacity-100" : "before:opacity-0",
          showMask.bottom ? "after:opacity-100" : "after:opacity-0",
          "before:bg-linear-to-b before:from-background before:to-transparent",
          "after:bg-linear-to-t after:from-background after:to-transparent",
          className
        )}
        style={
          {
            "--top-fade-height": showMask.top ? `${maskHeight}px` : "0px",
            "--bottom-fade-height": showMask.bottom ? `${maskHeight}px` : "0px",
          } as React.CSSProperties
        }
      />
      <div
        {...props}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-10",
          "before:absolute before:inset-y-0 before:left-0 before:transition-[width,opacity] before:duration-300 before:content-['']",
          "after:absolute after:inset-y-0 after:right-0 after:transition-[width,opacity] after:duration-300 after:content-['']",
          "before:w-(--left-fade-width) after:w-(--right-fade-width)",
          showMask.left ? "before:opacity-100" : "before:opacity-0",
          showMask.right ? "after:opacity-100" : "after:opacity-0",
          "before:bg-linear-to-r before:from-background before:to-transparent",
          "after:bg-linear-to-l after:from-background after:to-transparent",
          className
        )}
        style={
          {
            "--left-fade-width": showMask.left ? `${maskHeight}px` : "0px",
            "--right-fade-width": showMask.right ? `${maskHeight}px` : "0px",
          } as React.CSSProperties
        }
      />
    </>
  )
}

export default function WizardExpandable(props: WizardExpandableProps) {
  return <WizardExpandableInner {...props} />
}

"use client"

import { motion } from "motion/react"

import {
  CutoutCard,
  CutoutCardAction,
  CutoutCardContent,
  CutoutCardFooter,
  CutoutCardImage,
  CutoutCardInsetLabel,
  CutoutCardMedia,
  CutoutCardOverlay,
  CutoutCardPin,
  cutoutCardSurfaceClassName,
  CutoutCorner,
  useCutoutContentStaggerVariants,
} from "@/components/ui/cutout-card"

// ============================================================================
// Demo — full-page showcase matching the original single-component layout
// ============================================================================

function CutoutCardDemo() {
  const stagger = useCutoutContentStaggerVariants()

  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative w-full max-w-md">
        <CutoutCard className={cutoutCardSurfaceClassName}>
          <CutoutCardMedia className="h-72">
            <CutoutCardImage
              alt="Mountain landscape"
              sizes="(max-width: 768px) 100vw, 448px"
              src="/placeholders/apple-wallpaper.jpg"
            />
            <CutoutCardOverlay />
            <CutoutCardInsetLabel className="bg-card bottom-0 left-0 rounded-tr-[20px] px-5 py-3">
              <span className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
                Featured
              </span>
              <CutoutCorner className="text-card absolute -right-[31px] -bottom-px rotate-90" />
              <CutoutCorner className="text-card absolute -top-[31px] -left-px rotate-90" />
            </CutoutCardInsetLabel>
            <CutoutCardPin className="bg-primary text-primary-foreground shadow-foreground/10 ring-border/30 top-0 right-0 rounded-bl-[16px] px-4 py-2 text-sm font-semibold shadow-md ring-1">
              New
              <CutoutCorner
                className="text-primary absolute top-0 -left-[23px] -rotate-90"
                size={24}
              />
              <CutoutCorner
                className="text-primary absolute right-0 -bottom-[23px] -rotate-90"
                size={24}
              />
            </CutoutCardPin>
          </CutoutCardMedia>
          <CutoutCardContent>
            <motion.div
              animate="show"
              className="contents"
              initial="hidden"
              variants={stagger.container}
            >
              <motion.h2
                className="text-card-foreground mb-2 text-xl leading-snug font-semibold text-balance"
                variants={stagger.item}
              >
                Alpine Adventures
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty"
                variants={stagger.item}
              >
                Discover breathtaking mountain landscapes and experience the
                serenity of nature at its finest.
              </motion.p>
              <motion.div variants={stagger.item}>
                <CutoutCardFooter className="border-border/80 border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="from-chart-4 to-chart-5 ring-card h-8 w-8 rounded-full bg-linear-to-br shadow-sm ring-2" />
                    <span className="text-card-foreground text-sm font-medium">
                      Sarah Chen
                    </span>
                  </div>
                  <span className="text-muted-foreground text-xs tabular-nums">
                    5 min read
                  </span>
                </CutoutCardFooter>
              </motion.div>
            </motion.div>
          </CutoutCardContent>
          <CutoutCardAction className="right-5 bottom-5">
            <button
              className="bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium shadow-md transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
              type="button"
            >
              Read More
            </button>
          </CutoutCardAction>
        </CutoutCard>
      </div>
    </div>
  )
}

export default CutoutCardDemo
this alott..cutout i want this

FIGMA
<div className="self-stretch inline-flex flex-col justify-start items-start"> <div className="w-full max-w-[1500px] py-12 flex flex-col justify-start items-center gap-7"> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Trusted by:</div> <div className="self-stretch inline-flex justify-center items-center gap-10 flex-wrap content-center"> <div className="w-40 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/114x44" /> </div> <div className="w-40 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/114x44" /> </div> <div className="w-40 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/114x44" /> </div> <div className="w-40 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/114x44" /> </div> <div className="w-40 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/114x44" /> </div> <div className="w-36 h-20 p-5 inline-flex flex-col justify-center items-start gap-2.5 overflow-hidden"> <img className="self-stretch flex-1 relative opacity-60 mix-blend-exclusion" src="https://placehold.co/110x42" /> </div> </div> </div> <div className="w-full max-w-[1500px] pb-28 flex flex-col justify-start items-start"> <div className="self-stretch pt-20 pb-14 border-t-[0.50px] border-gray-200 flex flex-col justify-start items-start gap-12"> <div className="self-stretch pr-96 flex flex-col justify-start items-start gap-12"> <div className="w-[575.57px] justify-start text-lime-800 text-xs font-normal font-['Roboto_Mono'] leading-4">Benefits</div> <div className="self-stretch justify-start text-black text-6xl font-normal font-['Crimson_Text'] leading-[54px]">We’ve cracked the code.</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Area provides real insights, without the data overload.</div> </div> <div className="self-stretch pt-10 inline-flex justify-start items-start gap-5 flex-wrap content-start"> <div className="flex-1 min-w-64 pr-5 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6"> <div className="size-6 relative overflow-hidden"> <div className="size-5 left-[1.81px] top-[2.49px] absolute bg-black" /> </div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Amplify Insights</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</div> </div> </div> <div className="flex-1 min-w-64 pr-5 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-5"> <div className="size-6 relative overflow-hidden"> <div className="size-5 left-[2px] top-[2px] absolute bg-black" /> </div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Control Your Global Presence</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</div> </div> </div> <div className="flex-1 min-w-64 pr-10 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6"> <div className="size-6 relative overflow-hidden"> <div className="w-6 h-5 left-[1px] top-[2px] absolute bg-black" /> </div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Remove Language Barriers</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</div> </div> </div> <div className="flex-1 min-w-64 pr-10 py-10 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-6"> <div className="size-6 relative overflow-hidden"> <div className="w-5 h-3 left-[1px] top-[6px] absolute bg-black" /> </div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Visualize Growth</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</div> </div> </div> </div> </div> <img className="self-stretch h-[620px] relative rounded-[30px]" src="https://placehold.co/1200x620" /> </div> <div className="w-full max-w-[1500px] pb-28 inline-flex justify-start items-start gap-5"> <div className="flex-1 pt-14 pb-20 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-10"> <div className="self-stretch pr-20 flex flex-col justify-start items-start gap-10"> <div className="self-stretch justify-start text-black text-6xl font-normal font-['Crimson_Text'] leading-[54px]">See the Big Picture</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Area turns your data into clear, vibrant visuals that show you exactly what&apos;s happening in each region.</div> </div> <div className="self-stretch flex flex-col justify-start items-start"> <div className="self-stretch pr-20 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7"> <div className="justify-start text-neutral-500 text-base font-bold font-['DM_Sans'] leading-5">01</div> <div className="flex-1 justify-start text-black text-base font-normal font-['DM_Sans'] leading-5">Spot Trends in Seconds: No more digging through numbers. </div> </div> <div className="self-stretch pr-20 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7"> <div className="justify-start text-neutral-500 text-base font-bold font-['DM_Sans'] leading-5">02</div> <div className="flex-1 justify-start text-black text-base font-normal font-['DM_Sans'] leading-5">Get Everyone on the Same Page: Share easy-to-understand reports with your team. </div> </div> <div className="self-stretch pr-20 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7"> <div className="justify-start text-neutral-500 text-base font-bold font-['DM_Sans'] leading-5">03</div> <div className="flex-1 justify-start text-black text-base font-normal font-['DM_Sans'] leading-5">Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</div> </div> <div className="self-stretch pr-20 py-5 border-t border-gray-200 inline-flex justify-center items-start gap-7"> <div className="justify-start text-neutral-500 text-base font-bold font-['DM_Sans'] leading-5">04</div> <div className="flex-1 justify-start text-black text-base font-normal font-['DM_Sans'] leading-5">Your Global Snapshot: Get a quick, clear overview of your entire operation.</div> </div> </div> <div data-type="Primary" className="size- px-5 py-3.5 bg-lime-100 rounded-full flex flex-col justify-center items-center gap-2.5"> <div className="text-center justify-start text-black text-sm font-bold font-['DM_Sans'] leading-5">Discover More</div> </div> </div> <div className="flex-1 max-w-[1600px] inline-flex flex-col justify-start items-start gap-5"> <div className="self-stretch h-[711px] p-7 bg-black/5 rounded-[30px]" /> </div> </div> <div className="w-full max-w-[1500px] pb-28 flex flex-col justify-start items-start gap-5 overflow-hidden"> <div className="self-stretch px-60 py-20 border-t border-neutral-400 flex flex-col justify-start items-center gap-10"> <div className="self-stretch flex flex-col justify-start items-center gap-10"> <div className="self-stretch text-center justify-start text-lime-800 text-xs font-normal font-['Roboto_Mono'] leading-4">Specs</div> <div className="self-stretch text-center justify-start text-black text-6xl font-normal font-['Crimson_Text'] leading-[54px]">Why Choose Area?</div> <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </div> <div data-type="Primary" className="size- px-5 py-3.5 bg-lime-100 rounded-full flex flex-col justify-center items-center gap-2.5"> <div className="text-center justify-start text-black text-sm font-bold font-['DM_Sans'] leading-5">Discover More</div> </div> </div> </div> <div className="self-stretch rounded-[20px] inline-flex justify-start items-start overflow-hidden"> <div className="flex-1 min-w-48 bg-white rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-start items-start overflow-hidden"> <div className="self-stretch h-24 px-7 py-10 border-b border-neutral-400 inline-flex justify-center items-start gap-4"> <div className="justify-center text-black text-2xl font-medium font-['DM_Sans'] leading-8">Area</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Ultra-fast browsing</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Advanced AI insights</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Seamless integration</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Advanced AI insights</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Ultra-fast browsing</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-lime-800" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Full UTF-8 support</div> </div> </div> <div className="flex-1 min-w-48 inline-flex flex-col justify-start items-start"> <div className="self-stretch h-24 px-7 py-10 border-b border-neutral-400 inline-flex justify-center items-start gap-4"> <div className="justify-center text-neutral-500 text-2xl font-medium font-['Rethink_Sans'] leading-7">WebSurge</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Fast browsing</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Basic AI recommendations</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Restricts customization</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Basic AI insights</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="w-2.5 h-2 left-[2.04px] top-[3.26px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Fast browsing</div> </div> <div className="self-stretch px-7 py-8 border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Potential display errors</div> </div> </div> <div className="flex-1 min-w-48 inline-flex flex-col justify-start items-start"> <div className="self-stretch h-24 px-7 py-10 border-b border-neutral-400 inline-flex justify-center items-start gap-4"> <div className="justify-center text-neutral-500 text-xl font-medium font-['Reddit_Mono'] leading-6">HyperView</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Moderate speeds</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">No AI assistance</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Steep learning curve</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">No AI assistance</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-b-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Moderate speeds</div> </div> <div className="self-stretch px-7 py-8 border-l-[0.50px] border-gray-200 inline-flex justify-start items-center gap-2"> <div className="size-3.5 relative overflow-hidden"> <div className="size-2 left-[2.92px] top-[2.92px] absolute bg-neutral-500" /> </div> <div className="text-center justify-start text-black text-xs font-normal font-['Roboto_Mono'] leading-4">Partial UTF-8 support</div> </div> </div> </div> </div> <div className="w-full h-[789.38px] max-w-[1500px] pb-28 inline-flex justify-start items-start gap-5"> <img className="flex-1 h-[669.38px] p-2.5 rounded-[30px]" src="https://placehold.co/590x669" /> <div className="flex-1 self-stretch pl-12 border-t border-gray-200 inline-flex flex-col justify-center items-start gap-12"> <div className="self-stretch justify-start text-black text-4xl font-normal font-['Crimson_Text'] leading-10">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can&apos;t imagine running my company without it.”</div> <div className="self-stretch flex flex-col justify-start items-start gap-2"> <div className="self-stretch justify-start text-black text-base font-normal font-['DM_Sans'] leading-5">John Smith</div> <div className="self-stretch justify-start text-lime-800 text-xs font-normal font-['Roboto_Mono'] leading-4">Head of Data</div> </div> </div> </div> <div className="w-full max-w-[1500px] pt-20 pb-28 border-t border-gray-200 flex flex-col justify-start items-start gap-20"> <div className="self-stretch inline-flex justify-between items-start"> <div className="text-center justify-start text-black text-6xl font-normal font-['Crimson_Text'] leading-[54px]">Map Your Success</div> <div data-type="Primary" className="size- px-5 py-3.5 bg-lime-100 rounded-full inline-flex flex-col justify-center items-center gap-2.5"> <div className="text-center justify-start text-black text-sm font-bold font-['DM_Sans'] leading-5">Discover More</div> </div> </div> <div className="self-stretch inline-flex justify-center items-start gap-5"> <div className="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14"> <div className="self-stretch justify-start text-neutral-400 text-7xl font-normal font-['DM_Sans'] leading-[80px]">01</div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Get Started</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">With our intuitive setup, you’re up and running in minutes.</div> </div> </div> <div className="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14"> <div className="self-stretch justify-start text-neutral-400 text-7xl font-normal font-['DM_Sans'] leading-[80px]">02</div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Customize and Configure</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Adapt Area to your specific requirements and preferences.</div> </div> </div> <div className="flex-1 min-w-60 pr-7 pt-14 pb-5 border-t border-gray-200 inline-flex flex-col justify-start items-start gap-14"> <div className="self-stretch justify-start text-neutral-400 text-7xl font-normal font-['DM_Sans'] leading-[80px]">03</div> <div className="self-stretch flex flex-col justify-start items-start gap-5"> <div className="self-stretch justify-start text-black text-lg font-normal font-['Crimson_Text'] leading-4">Grow Your Business</div> <div className="self-stretch justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Make informed decisions to exceed your goals.</div> </div> </div> </div> </div> <div className="self-stretch pb-10 flex flex-col justify-start items-center gap-2.5"> <div className="w-full h-[664.29px] max-w-[1500px] max-h-[830.36px] rounded-[30px] inline-flex justify-start items-start gap-2.5 overflow-hidden"> <img className="flex-1 self-stretch px-4" src="https://placehold.co/1200x664" /> </div> </div> <div className="w-full max-w-[1500px] px-72 py-28 border-t-[0.50px] border-gray-200 flex flex-col justify-start items-center gap-10"> <div className="self-stretch text-center justify-start text-black text-6xl font-normal font-['Crimson_Text'] leading-[54px]">Connect with us</div> <div className="self-stretch text-center justify-start text-neutral-500 text-base font-normal font-['DM_Sans'] leading-5">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</div> <div data-state="Default" className="self-stretch px-5 py-3.5 bg-lime-800 rounded-full inline-flex justify-center items-center gap-0.5"> <div className="text-center justify-start text-white text-sm font-bold font-['DM_Sans'] leading-5">Learn More</div> <div className="w-1.5 self-stretch flex justify-start items-center gap-2.5"> <div className="size-1.5 bg-white" /> </div> </div> </div> </div>

ina
<div className="w-[1920px] h-9 relative"> <div className="w-[1920px] h-9 left-0 top-0 absolute bg-zinc-900" /> <div className="left-[190px] top-[9px] absolute justify-start text-stone-50 text-sm font-normal font-['Lora']">Beautifully crafted Fashion Blog Template</div> <div className="left-[1387px] top-[12px] absolute justify-start text-stone-50 text-[10px] font-medium font-['Montserrat'] uppercase tracking-wide">About contact sponsors subscribe</div> </div> <div className="w-[1540px] h-11 relative"> <div className="size-4 left-[1522px] top-[13px] absolute overflow-hidden"> <div className="size-0.5 left-[5.06px] top-[13.50px] absolute bg-zinc-900" /> <div className="size-0.5 left-[12.94px] top-[13.50px] absolute bg-zinc-900" /> <div className="w-4 h-2.5 left-[1.13px] top-[2.25px] absolute bg-zinc-900" /> </div> <div className="size-4 left-[1472px] top-[13px] absolute overflow-hidden"> <div className="size-3.5 left-[1.69px] top-[1.69px] absolute bg-zinc-900" /> </div> <div className="size-4 left-[1422px] top-[13px] absolute overflow-hidden"> <div className="w-3 h-3.5 left-[2.59px] top-[2.02px] absolute bg-zinc-900" /> </div> <div className="w-11 h-px left-[645px] top-[34px] absolute bg-zinc-900" /> <div className="left-[646px] top-[15px] absolute justify-start text-zinc-900 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Home Reviews Fashion Clothing News shop Videos</div> <div className="left-0 top-0 absolute justify-start"><span class="text-zinc-900 text-4xl font-normal font-['Lora'] uppercase tracking-wider">Fashio</span><span class="text-zinc-900 text-4xl font-semibold font-['Lora'] uppercase tracking-wider">nise</span></div> </div> <div className="w-[1920px] h-[853px] relative"> <div className="w-[1920px] h-[853px] left-0 top-0 absolute bg-black" /> <img className="w-[1920px] h-[853px] left-0 top-0 absolute opacity-90" src="https://placehold.co/1920x853" /> <div className="w-[1020px] left-[450px] top-[349px] absolute text-center justify-start text-stone-50 text-6xl font-normal font-['Lora'] leading-[71.92px]">How to unlock creativity &amp; make something useful?</div> <div className="left-[837px] top-[526px] absolute text-center justify-start"><span class="text-stone-50 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-stone-50 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-[928px] top-[314px] absolute text-center justify-start text-stone-50 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <div className="w-8 h-4 left-[1696px] top-[419px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-50" /> <div className="w-8 h-4 left-[224px] top-[435px] absolute origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-stone-50" /> </div> <div className="w-[1540px] h-[550px] relative"> <div className="size-3.5 left-[1296px] top-[535px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <div className="w-[500px] left-[1040px] top-[445px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">Some great products for blasting fashion</div> <div className="left-[1040px] top-[535px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-[1040px] top-[420px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <img className="w-[500px] h-80 left-[1040px] top-[66px] absolute" src="https://placehold.co/500x334" /> <div className="size-3.5 left-[776px] top-[535px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <div className="w-[500px] left-[520px] top-[445px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">The best foundation you can find on sale</div> <div className="left-[520px] top-[535px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-[520px] top-[420px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <img className="w-[500px] h-80 left-[520px] top-[66px] absolute" src="https://placehold.co/500x334" /> <div className="size-3.5 left-[256px] top-[535px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <div className="w-[500px] left-0 top-[445px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">How to check if the product is good quality or not</div> <div className="left-0 top-[535px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-0 top-[420px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <img className="w-[500px] h-80 left-0 top-[66px] absolute" src="https://placehold.co/500x334" /> <div className="left-0 top-0 absolute justify-start text-zinc-900 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Latest Posts</div> </div> <div className="w-[1540px] h-[548px] relative"> <div className="size-3.5 left-[1296px] top-[533px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <img className="w-[500px] h-80 left-[1040px] top-[64px] absolute" src="https://placehold.co/500x334" /> <div className="w-[500px] left-[1040px] top-[443px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">Top 10 best optical brand in the whole world</div> <div className="left-[1040px] top-[533px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-[1040px] top-[418px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <div className="size-3.5 left-[776px] top-[533px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <div className="w-[500px] left-[520px] top-[443px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">Best accessories for soft brown color overcoat</div> <div className="left-[520px] top-[533px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-[520px] top-[418px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <img className="w-[500px] h-80 left-[520px] top-[64px] absolute" src="https://placehold.co/500x334" /> <div className="size-3.5 left-[256px] top-[533px] absolute overflow-hidden"> <div className="size-3 left-[1.88px] top-[1.88px] absolute bg-zinc-500" /> </div> <img className="w-[500px] h-80 left-0 top-[64px] absolute" src="https://placehold.co/500x334" /> <div className="w-[500px] left-0 top-[443px] absolute justify-start text-zinc-900 text-3xl font-normal font-['Lora'] leading-9">Photography poses tips and tricks for fashion</div> <div className="left-0 top-[533px] absolute justify-start"><span class="text-zinc-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Feb 12, 2022 | by </span><span class="text-zinc-500 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Lora Mariane</span></div> <div className="left-0 top-[418px] absolute justify-start text-stone-500 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Fashion</div> <div className="left-0 top-0 absolute justify-start text-zinc-900 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Popular Posts</div> </div> <div className="w-[1920px] h-[1051px] relative"> <div className="w-[1920px] h-[1051px] left-0 top-0 absolute bg-zinc-900" /> <div className="w-9 h-5 left-[1793px] top-[497px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-50" /> <div className="w-9 h-5 left-[130px] top-[517px] absolute origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-stone-50" /> <div className="size-4 left-[925px] top-[898px] absolute rounded-full border border-stone-50" /> <div className="size-2 left-[930px] top-[903px] absolute bg-stone-50 rounded-full" /> <div className="size-2 left-[958px] top-[903px] absolute bg-zinc-500 rounded-full" /> <div className="size-2 left-[986px] top-[903px] absolute bg-zinc-500 rounded-full" /> <div className="w-[760px] h-96 left-[973px] top-[204px] absolute bg-zinc-900" /> <img className="w-[760px] h-96 left-[973px] top-[204px] absolute" src="https://placehold.co/760x427" /> <div className="size-20 left-[1316px] top-[381px] absolute rounded-full border border-stone-50" /> <div className="w-5 h-6 left-[1344.38px] top-[405.78px] absolute bg-stone-50" /> <div className="w-[610px] left-[973px] top-[651px] absolute justify-start text-stone-50 text-5xl font-normal font-['Lora'] leading-[55.80px]">Why is makeup important for your confidence ?</div> <div className="w-[610px] left-[973px] top-[773px] absolute justify-start text-stone-50 text-base font-normal font-['Lora'] leading-6">Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras neque.</div> <div className="w-[760px] h-96 left-[190px] top-[204px] absolute bg-zinc-900" /> <img className="w-[760px] h-96 left-[190px] top-[204px] absolute" src="https://placehold.co/760x427" /> <div className="size-20 left-[533px] top-[381px] absolute rounded-full border border-stone-50" /> <div className="size-8 left-[555px] top-[401px] absolute overflow-hidden"> <div className="w-5 h-6 left-[6.38px] top-[4.78px] absolute bg-stone-50" /> </div> <div className="w-[610px] left-[190px] top-[651px] absolute justify-start text-stone-50 text-5xl font-normal font-['Lora'] leading-[55.80px]">Beautiful dress shown by top fashion models</div> <div className="w-[610px] left-[190px] top-[773px] absolute justify-start text-stone-50 text-base font-normal font-['Lora'] leading-6">Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras neque.</div> <div className="left-[190px] top-[140px] absolute justify-start text-stone-50 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Top videos</div> </div> <div className="w-[1920px] h-[566px] relative"> <div className="left-[1865px] top-[549px] absolute text-right justify-start text-stone-500 text-sm font-bold font-['Montserrat'] uppercase tracking-wider">$35.00</div> <div className="left-[1552px] top-[549px] absolute justify-start text-zinc-900 text-sm font-medium font-['Montserrat'] uppercase tracking-wider">Florish onepiece</div> <img className="w-96 h-[475px] left-[1552px] top-[64px] absolute" src="https://placehold.co/368x475" /> <div className="left-[1477px] top-[549px] absolute text-right justify-start text-stone-500 text-sm font-bold font-['Montserrat'] uppercase tracking-wider">$35.00</div> <div className="left-[1164px] top-[549px] absolute justify-start text-zinc-900 text-sm font-medium font-['Montserrat'] uppercase tracking-wider">Choco leather bag</div> <img className="w-96 h-[475px] left-[1164px] top-[64px] absolute" src="https://placehold.co/368x475" /> <div className="left-[1089px] top-[549px] absolute text-right justify-start text-stone-500 text-sm font-bold font-['Montserrat'] uppercase tracking-wider">$35.00</div> <div className="left-[776px] top-[549px] absolute justify-start text-zinc-900 text-sm font-medium font-['Montserrat'] uppercase tracking-wider">Check jumpsuit</div> <img className="w-96 h-[475px] left-[776px] top-[64px] absolute" src="https://placehold.co/368x475" /> <div className="left-[701px] top-[549px] absolute text-right justify-start text-stone-500 text-sm font-bold font-['Montserrat'] uppercase tracking-wider">$35.00</div> <div className="left-[388px] top-[549px] absolute justify-start text-zinc-900 text-sm font-medium font-['Montserrat'] uppercase tracking-wider">Black Top Coat</div> <img className="w-96 h-[475px] left-[388px] top-[64px] absolute" src="https://placehold.co/368x475" /> <div className="left-0 top-[549px] absolute justify-start text-zinc-900 text-sm font-medium font-['Montserrat'] uppercase tracking-wider">Baggy grey shirt</div> <div className="left-[313px] top-[549px] absolute text-right justify-start text-stone-500 text-sm font-bold font-['Montserrat'] uppercase tracking-wider">$35.00</div> <img className="w-96 h-[475px] left-0 top-[64px] absolute" src="https://placehold.co/368x475" /> <div className="left-[190px] top-0 absolute justify-start text-zinc-900 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Shop it now</div> <div className="w-36 h-px left-[1578px] top-[24px] absolute bg-zinc-900" /> <div className="left-[1578px] top-[5px] absolute text-center justify-start text-zinc-900 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">View All Products</div> </div> <div className="w-[1280px] h-32 relative"> <div className="w-96 left-0 top-0 absolute justify-start text-zinc-900 text-6xl font-normal font-['Lora'] capitalize leading-[66.12px]">Subscribe our newsletter</div> <div className="w-[461px] h-20 left-[650px] top-[30px] absolute border border-stone-300" /> <div className="left-[693px] top-[54px] absolute justify-start text-zinc-500 text-base font-normal font-['Lora'] leading-6">Your e-mail address here</div> <div className="w-44 h-20 left-[1104px] top-[30px] absolute bg-zinc-900" /> <div className="left-[1151px] top-[59px] absolute text-center justify-start text-stone-50 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">Subscribe</div> </div> <div className="w-[1920px] h-[540px] relative"> <div className="w-[1920px] h-[540px] left-0 top-0 absolute bg-zinc-900" /> <div className="w-[1920px] h-px left-0 top-[464px] absolute bg-neutral-500" /> <div className="left-[190px] top-[495px] absolute justify-start text-stone-50 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">© Fashionise. ALL RIGHTS RESERVED.</div> <div className="left-[1481px] top-[495px] absolute text-right justify-start"><span class="text-stone-50 text-xs font-medium font-['Montserrat'] uppercase tracking-wide">designed by </span><span class="text-stone-50 text-xs font-semibold font-['Montserrat'] uppercase tracking-wide">Templates Jungle</span></div> <div className="left-[1418px] top-[152px] absolute justify-start text-stone-50 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Categories</div> <div className="left-[1418px] top-[204px] absolute justify-start text-stone-50 text-xs font-medium font-['Montserrat'] uppercase leading-7 tracking-wide">fashion <br/>ENTERTAINMENT <br/>beauty<br/>LIFESTYLE <br/>TRAVEL </div> <div className="left-[864px] top-[152px] absolute justify-start text-stone-50 text-2xl font-medium font-['Lora'] uppercase leading-7 tracking-wide">Quick links</div> <div className="left-[864px] top-[204px] absolute justify-start text-stone-50 text-xs font-medium font-['Montserrat'] uppercase leading-7 tracking-wide">About <br/>Shop <br/>Contact <br/>Subscribe <br/>Term &amp; condition</div> <div className="w-80 h-20 left-[190px] top-[204px] absolute justify-start text-stone-50 text-base font-normal font-['Lora'] leading-6">Vel non nibh vestibulum massa ullamcorper. Bibendum ultrices venenatis, id id sed mass commodo eros duis ut cras neque.</div> <div className="left-[190px] top-[140px] absolute justify-start"><span class="text-stone-50 text-4xl font-normal font-['Lora'] uppercase tracking-wider">Fashio</span><span class="text-stone-50 text-4xl font-semibold font-['Lora'] uppercase tracking-wider">nise</span></div> <div className="left-[190px] top-[307px] absolute justify-start text-stone-50 text-base font-medium font-['Ionicons']"></div> <div className="left-[223px] top-[309px] absolute justify-start text-zinc-500 text-base font-medium font-['Ionicons']"></div> <div className="left-[263px] top-[309px] absolute justify-start text-zinc-500 text-base font-medium font-['Ionicons']"></div> <div className="left-[341px] top-[309px] absolute justify-start text-zinc-500 text-base font-medium font-['Ionicons']"></div> <div className="left-[303px] top-[309px] absolute justify-start text-zinc-500 text-base font-medium font-['Ionicons']"></div> </div>
Colour	Hex	Usage
Charcoal	#1B1B1B	Primary text, icons, dark backgrounds
Warm white	#FDFBF9	Light text and icons
Medium grey	#838383	Dates, metadata, secondary icons
Muted gold	#977A50	Category labels and accents
Light grey	#CBCBCB	Newsletter input border
Dark grey	#717171	Footer divider
Black	#000000	Slider background

## tetris 

<body><section class="section"><div class="w-layout-blockcontainer container w-container"><div class="div-block-2"><div class="w-layout-grid grid"><div id="w-node-_9d4c4319-2a17-3f12-8982-6eef869d0873-91911199" class="image"><div id="w-node-_354673b9-5f27-f3ce-3536-ec4f868535e2-91911199" class="top-right"><div class="code-embed w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9 30H30V0H0V0.000164032C16.5225 0.054081 29.9 13.4648 29.9 30Z" fill="white"></path>
</svg></div><div class="code-embed-copy w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9 30H30V0H0V0.000164032C16.5225 0.054081 29.9 13.4648 29.9 30Z" fill="white"></path>
</svg></div><div>Book a call with us</div></div><h1>Tetris Grid Layout<br></h1></div><div id="w-node-_4ee87556-a238-1f96-66a9-264364851b92-91911199" class="col-1"><div class="code-embed-3 w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.100006 0H0V30H30V29.9998C13.4775 29.9459 0.100006 16.5352 0.100006 0Z" fill="white"></path>
</svg></div><div class="w-richtext"><h3>Introduction to the Tetris Grid Layout</h3><p>The Tetris Grid Layout is a dynamic and innovative approach to web design that combines the versatility of traditional grid layouts with the playful, interlocking nature of the classic Tetris game. This layout allows elements to span multiple rows and columns, and even wrap around other elements, creating a visually engaging and highly customizable interface. Unlike standard grid systems, which often impose strict alignment and uniformity, the Tetris Grid Layout provides designers with the flexibility to create unique and compelling visual patterns that can adapt to various content types and screen sizes.</p><h1>‍</h1></div></div><div id="w-node-_7cc787ea-b9b6-ad8c-7360-31b52efaf189-91911199" class="col-2"><div class="code-embed-3 w-embed"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.100006 0H0V30H30V29.9998C13.4775 29.9459 0.100006 16.5352 0.100006 0Z" fill="white"></path>
</svg></div><div class="w-richtext"><h3>Benefits of the Tetris Grid Layout</h3><p>One of the primary benefits of the Tetris Grid Layout is its ability to maximize space utilization while maintaining an aesthetically pleasing design. By allowing elements to interlock and wrap around each other, this layout minimizes whitespace and ensures that every pixel is used effectively. This is particularly useful for responsive design, as the layout can easily adapt to different screen sizes and orientations. Additionally, the Tetris Grid Layout enhances user engagement by creating a visually dynamic and interactive experience. The varied shapes and sizes of the elements can guide the user's eye through the content in a natural and intuitive manner.</p><h1>‍</h1></div></div><div id="w-node-baa35f90-57ea-e313-97aa-c213b41b7d6e-91911199" class="col-3"><div class="w-richtext"><h3>Implementing the Tetris Grid Layout</h3><p>Implementing the Tetris Grid Layout can be achieved using a combination of CSS Grid and custom JavaScript. CSS Grid provides the foundation for defining the layout structure, allowing elements to span multiple rows and columns. Custom JavaScript can then be used to dynamically adjust the placement and sizing of the elements, ensuring that they fit together seamlessly like Tetris pieces. This approach offers a high degree of flexibility and control, enabling designers to create complex and intricate layouts that would be difficult to achieve with traditional grid systems. The Tetris Grid Layout is an exciting and innovative tool for web designers looking to push the boundaries of modern web design.</p><h1>‍</h1></div></div></div></div></div></section><script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6b0778415f5fcc629191114a" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/6b0778415f5fcc629191114a/js/webflow.schunk.46469cbc9f839bdc.js" type="text/javascript" integrity="sha384-fvNoOsRhDXn8hFT+9Vs1T5TWxA5LZ5LNlU08pcBxdYFUMPBtY8GVCqm85UpuIqlh" crossorigin="anonymous"></script><script src="https://cdn.prod.website-files.com/6b0778415f5fcc629191114a/js/webflow.751e0867.148dc658e77a3916.js" type="text/javascript" integrity="sha384-gRsZCr5oM+8TIikTjp8mlQaxo339itgljbpHAoEYW6GgTyU0BumceR5934ES3MO8" crossorigin="anonymous"></script><a class="w-webflow-badge" href="https://webflow.com?utm_campaign=brandjs"><img src="https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg" alt="" style="margin-right: 4px; width: 26px;"><img src="https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg" alt="Made in Webflow"></a></body>

.letter-glitch {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.letter-glitch-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}
'use client';

import { useCallback, useEffect, useRef } from 'react';

import './ScrollExpand.css';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const ScrollExpand = ({
  src = '',
  mediaType = 'image',
  poster = '',
  alt = '',
  title = '',
  scrollHint = '',
  startWidth = 42,
  startHeight = 58,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.35,
  scrollDistance = 1.2,
  holdDistance = 0.35,
  smoothing = 0.1,
  overlayScrim = 0.45,
  useWindowScroll = false,
  enabled = true,
  children,
  className = '',
  style,
  ...rest
}) => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const frameRef = useRef(null);
  const mediaRef = useRef(null);
  const titleRef = useRef(null);
  const overlayRef = useRef(null);
  const scrimRef = useRef(null);
  const hintRef = useRef(null);

  const propsRef = useRef({});
  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled
  };

  const applyProgress = useCallback(p => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return;
    const c = propsRef.current;

    const e = smoothstep(0, 1, p);

    const w = c.startWidth + (100 - c.startWidth) * e;
    const h = c.startHeight + (100 - c.startHeight) * e;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * e;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;

    media.style.transform = `scale(${c.mediaZoom + (1 - c.mediaZoom) * e})`;

    if (scrimRef.current) scrimRef.current.style.opacity = `${c.overlayScrim * e}`;

    if (titleRef.current) {
      const out = smoothstep(0.4, 0.88, p);
      titleRef.current.style.opacity = `${1 - out}`;
      titleRef.current.style.transform = `translate3d(0, ${-28 * out}px, 0) scale(${1 + 0.06 * out})`;
    }

    if (hintRef.current) {
      const gone = smoothstep(0, 0.12, p);
      hintRef.current.style.opacity = `${1 - gone}`;
      hintRef.current.style.transform = `translate3d(0, ${8 * gone}px, 0)`;
    }

    if (overlayRef.current) {
      const inn = smoothstep(0.68, 1, p);
      overlayRef.current.style.opacity = `${inn}`;
      overlayRef.current.style.transform = `translate3d(0, ${18 * (1 - inn)}px, 0)`;
    }
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!root || !track || !stage) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let current = 0;
    let target = 0;
    let stageH = 0;
    let running = false;

    const measure = () => {
      const c = propsRef.current;
      stageH = c.useWindowScroll ? window.innerHeight : root.clientHeight;
      if (stageH <= 0) return;
      stage.style.height = `${stageH}px`;
      track.style.height = `${stageH * (1 + Math.max(0, c.scrollDistance) + Math.max(0, c.holdDistance))}px`;

      const w = root.clientWidth || stageH;
      stage.style.setProperty('--se-title-size', `${clamp(w * 0.075, 20, 84)}px`);
    };

    const readProgress = () => {
      const c = propsRef.current;
      if (!c.enabled) return 1;
      const span = stageH * Math.max(0.01, c.scrollDistance);
      if (c.useWindowScroll) {
        const top = track.getBoundingClientRect().top;
        return clamp(-top / span, 0, 1);
      }
      return clamp(root.scrollTop / span, 0, 1);
    };

    const tick = () => {
      const c = propsRef.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      applyProgress(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (propsRef.current.smoothing <= 0 || reduceMotion) {
        current = target;
        applyProgress(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      applyProgress(current);
    };

    measure();
    target = readProgress();
    current = target;
    applyProgress(current);

    const scroller = useWindowScroll ? window : root;
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(root);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, [applyProgress, useWindowScroll]);

  const media =
    mediaType === 'video' ? (
      <video
        ref={mediaRef}
        className="scroll-expand__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img ref={mediaRef} className="scroll-expand__media" src={src} alt={alt} draggable={false} />
    );

  return (
    <div
      ref={rootRef}
      className={`scroll-expand ${useWindowScroll ? '' : 'scroll-expand--scroller'} ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div ref={trackRef} className="scroll-expand__track">
        <div ref={stageRef} className="scroll-expand__stage">
          <div ref={frameRef} className="scroll-expand__frame">
            {media}
            <div ref={scrimRef} className="scroll-expand__scrim" />
            {children ? (
              <div ref={overlayRef} className="scroll-expand__overlay">
                {children}
              </div>
            ) : null}
          </div>
          {title ? (
            <div ref={titleRef} className="scroll-expand__title">
              {title}
            </div>
          ) : null}
          {scrollHint ? (
            <div ref={hintRef} className="scroll-expand__hint">
              {scrollHint}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ScrollExpand;

