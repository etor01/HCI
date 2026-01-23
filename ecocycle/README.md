# EcoCycle

**Student:** AHIATAKU ETORNAM KORDZO — 3366422

EcoCycle is a responsive, single-page educational web application created as a school course assignment. The site teaches users about recycling and sustainable living by explaining how to prepare and sort different types of waste, locating recycling centers, and giving an interactive quiz to reinforce learning.

## Purpose

The goal of EcoCycle is to make recycling simple and approachable. The app presents brief, actionable guidance on how to recycle common materials and helps users find recycling centers using an embedded map.

## Key Features

- **Material Recycling Guide:** Concise instructions for preparing and sorting recyclable materials (paper, plastic, glass, metal, organic waste, etc.).
- **Recycling Centers Map:** An embedded map frame that highlights recycling pickup points and centers. The map includes a progress indicator while it loads.
- **Interactive Quiz:** A short quiz to test understanding with confirmatory dialogs on submit and reset actions to prevent accidental clicks.

## Design Approach

The design emphasizes clarity, minimalism, and visual appeal. Prototypes were iterated based on peer feedback and inspiration from design resources to follow a user-centered design (UCD) approach. The interface uses a clean layout, readable typography, and modest animations to support learning without distraction.

## Usability & Heuristics

EcoCycle applies Nielsen’s usability heuristics including:
- **Aesthetic & Minimal Design:** Simple layouts and subtle visuals for clarity.
- **Consistency & Standards:** Standard fonts and familiar icons to reduce learning time.
- **Visibility of System Status:** A progress bar shows the map loading status.
- **Error Prevention:** Confirm dialogs for critical quiz actions (submit/reset).
- **Flexibility & Efficiency:** Responsive layout for desktop and mobile devices.
- **User Control & Freedom:** Options to open the map in a larger popup and reset quiz answers.

## Usability Evaluation

Informal usability testing with peers was carried out to collect feedback on clarity, navigation, and usefulness. Feedback guided small layout and content adjustments to improve readability and reduce friction.

## Challenges & Implementation Notes

- Integrating a live map presented sizing and API-cost challenges. To avoid incurring map API costs, the application currently uses an embedded/pop-up map with a fixed (hard-coded) location rather than fully dynamic per-user geolocation.
- The map is framed in a popup so it does not distract from the main content but remains easy to access.

## How to Run (development)

Install dependencies and start the dev server from the `ecocycle` folder:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

Note: If you prefer the static iteration, see the `Version 1` folder containing a standalone `index.html` preview.

## Credits & Resources

- Built as a course assignment for HCI/usability studies.
- Design ideas were inspired by peer feedback and resources such as Pinterest and Google image search.

## License & Contact

This project was created for an academic assignment. For questions or feedback, contact the author Ahiataku Etornam Kordzo.

