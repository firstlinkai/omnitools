import type { ToolContent } from "@/lib/tool-content";

const content: ToolContent = {
  intro:
    "CSS Keyframe Builder lets you design a transform animation on a visual timeline and exports clean, standard @keyframes CSS. Add keyframes along the track, set translate, scale, rotate, and opacity for each one, and watch a live preview loop as you edit. When it looks right, copy or download the CSS — everything runs in your browser with no build step and no account.",
  steps: [
    {
      title: "Start from a preset or blank",
      body: "Pick a preset to load a ready-made animation, or begin with the default start and end keyframes and build from there.",
    },
    {
      title: "Add and place keyframes",
      body: "Click anywhere on the timeline track to add a keyframe, and drag any dot to retime it. The start and end sit at 0% and 100%, while new stops interpolate from the surrounding values.",
    },
    {
      title: "Edit the transform",
      body: "Select a dot to adjust its Translate X and Y, Scale, Rotate, and Opacity with sliders or exact number inputs. Every change updates the preview instantly.",
    },
    {
      title: "Tune the animation settings",
      body: "Set the duration, easing, iteration count, and direction. Use Play, Pause, and Restart to review the loop, and delete any keyframe except the fixed endpoints.",
    },
    {
      title: "Copy or download the CSS",
      body: "Copy the generated @keyframes and animation shorthand, or download it as animation.css to drop into your stylesheet.",
    },
  ],
  useCases: [
    "Build a bounce, pulse, or slide-in effect for a UI element",
    "Prototype a hover or attention animation without hand-writing keyframes",
    "Fine-tune easing and timing while watching a live preview",
    "Learn how transform and opacity keyframes translate into CSS",
    "Generate reusable @keyframes for a design system or component library",
    "Create a looping animation for a loader, badge, or call-to-action",
  ],
  faqs: [
    {
      q: "Is the CSS Keyframe Builder free?",
      a: "Yes. Every FreeTools tool is completely free — no account, no watermark, and no sign-up required.",
    },
    {
      q: "Is anything uploaded to a server?",
      a: "No. The timeline, preview, and CSS are all generated in your browser. Nothing is uploaded and no data leaves your device.",
    },
    {
      q: "What CSS does it output?",
      a: "It produces a standard @keyframes block using transform (translate, scale, rotate) and opacity, plus an animation shorthand with your duration, easing, iteration count, and direction. You can copy it or download animation.css.",
    },
    {
      q: "Can I move or delete keyframes?",
      a: "Yes. Drag any dot along the track to change its timing, and delete any keyframe you add. The 0% and 100% endpoints stay fixed in place, but their transform and opacity values are fully editable.",
    },
    {
      q: "Why does the preview sometimes start paused?",
      a: "If your system prefers reduced motion, the preview starts paused out of respect for that setting. Press Play to run it anyway.",
    },
  ],
};

export default content;
