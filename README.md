# 🚲 My Bike Landing Page

Modern, high-performance landing page dedicated to showcasing the **My Bike** collection. Built with a focus on premium aesthetics, seamless scroll-based interactions, and a robust, scalable architecture.

### 🔗 Live Preview
You can check out the live version of the landing page here: [👉 PROJECT DEMO](https://nazarii-lesniak.github.io/my-bike-landing-page/)

### 🎨 Design & UI/UX
The project features a minimalist, clean aesthetic tailored for high-end product presentation.
- **Figma Design:** [View Original Design Concept](https://www.figma.com/design/NZQAIydtHo5QkINyGLHNcq/BIKE-New-Version?node-id=0-1&p=f&t=f4GL7o3iB85yxDAI-0) - The UI was inspired by this professional layout to ensure high-end visual standards.
*   **Responsive & Adaptive:** Fully fluid layout, meticulously tested for mobile, tablet, and desktop screens without horizontal overflow.
*   **Intuitive Navigation:** Features a premium menu animation using for a better user experience.

### ✨ Key Features & Optimizations
*   **Adaptive Performance:** Implemented via `<picture>` tags with WebP format support and explicit Retina (`@2x`) assets to ensure maximum visual quality and load speed.
*   **Scroll-Triggered Reveals:** Sophisticated entry animations using CSS `transition`, `will-change`, and a custom `.visible` state, orchestrated by an `IntersectionObserver`.
*   **Accessibility (a11y):** Semantic HTML5 markup, `aria-label` for screen readers.
*   **Maintainable Architecture:** Strict adherence to **BEM methodology** for scalable, modular SCSS architecture.
*   **Interactive Forms:** Client-side validation with real-time feedback, native `onsubmit` logic for zero-reload submission, and accessible input placeholders.

### 🛠 Technologies Used
*   **HTML5:** Semantic and accessible structure.
*   **SCSS:** Advanced styling with modular mixins, variables, and performance-driven state transitions.
* **JavaScript (ES6+):** Orchestrates dynamic UI states, including `IntersectionObserver` for scroll-triggered reveals and event-driven form submission processing with automatic resets.
*   **NPM Scripts:** Automated build and optimization pipeline.

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nazarii-Lesniak/my-bike-landing-page.git
   cd my-bike-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the project:**
   ```bash
   npm start
   ```

## 📄 License
This project is licensed under the GPL-3.0 License.