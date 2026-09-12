# CodeNection2026 — Design & Code Rules

> Read this file **before** adding or modifying any UI element.
> These rules are the single source of truth for how this project is built.

---

## 1. Architecture

### 1.1 Single-Page, Single-File Entry Point
- The project has **one entry point: `index.html`** (to be created / renamed from `dashboard.html`).
- The phone shell (`.device-container`) lives permanently in `index.html`.
- **All UI changes happen inside the phone viewport** — no browser page navigation, no `window.location`, no `<a href>` that loads a new page, no full-page refresh.
- New "screens" or "pages" are implemented by showing/hiding sections, swapping content inside `.app-viewport`, or opening bottom-sheet modals.

### 1.2 File Structure
```
presentation_layer/
  html/
    index.html          <- phone shell entry point (dock, modals, status bar)
    dashboard.html      <- dashboard screen fragment (loaded into viewport by JS)
    [screen].html       <- future screens follow the same pattern
  css/
    index.css           <- single stylesheet (all components)
  js/
    index.js            <- single JS file (all logic, state & screen loading)
```

> Do **not** add more HTML files for new screens/views — everything stays in `index.html`.

### 1.3 JavaScript Responsibilities
- JS owns all application state (in a single `state` object).
- Screen transitions, modal open/close, and dynamic content updates are done via JS DOM manipulation.
- Never use `location.reload()` or `location.href` to change views.

---

## 2. Code Cleanliness

### 2.1 No Unused Code
- Only write CSS rules for elements that **exist in the HTML**.
- Delete any rule, variable, or JS function that has no active usage.
- Run a usage audit whenever a component is removed.

### 2.2 No Redundant Code — Reuse First
- Before writing a new CSS class, check if an existing class can cover the need.
- Shared patterns (e.g., `.factor-item`, `.btn-action-primary`, `.sheet-header`) must not be duplicated — extend with a modifier class instead.
- JS utilities (`showToast`, modal open/close pattern) are shared and must not be rewritten per-feature.

### 2.3 No Inline Comment Clutter
- Do not leave `/* Requested: ... */`, `/* TODO: ... */`, or draft comments in production code.
- Section headers in CSS use the standard banner format:
  ```css
  /* ==========================================================================
     SECTION NAME
     ========================================================================== */
  ```

### 2.4 No Hardcoded Colour Literals Outside `:root`
- Hex values (`#4338CA`, `#E11D48`, etc.) are **only allowed inside `:root`** as variable definitions.
- All CSS rules and HTML `style=""` attributes must reference CSS variables (e.g., `var(--primary)`).
- Exception: SVG `stroke=""` and `fill=""` HTML **attributes** (not inline style properties) may remain as hex because they cannot reference CSS variables natively.

---

## 3. Colour System

All colours are defined as CSS variables in `:root` inside `dashboard.css`. **Never add a new raw colour — always add a token to `:root` first.**

### 3.1 Brand & Typography
| Variable | Value | Use |
|---|---|---|
| `--primary` | `#4338CA` | Brand colour, most text, icons |
| `--primary-hover` | `#3730A3` | Button hover state |
| `--primary-active` | `#312E81` | Button pressed state |
| `--primary-light` | `rgba(67,56,202,0.12)` | Subtle backgrounds |
| `--primary-subtle` | `rgba(67,56,202,0.08)` | Very light tints |
| `--primary-faint` | `rgba(67,56,202,0.04)` | Near-invisible tints |
| `--primary-glow` | `rgba(67,56,202,0.25)` | Box-shadow glow |
| `--primary-glow-lg` | `rgba(67,56,202,0.35)` | Stronger glow |

### 3.2 Canvas & Surfaces
| Variable | Value | Use |
|---|---|---|
| `--bg-canvas` | `#8FD9FB` | App background / device fill |
| `--bg-surface` | `#FFFFFF` | Card backgrounds |
| `--bg-surface-glass` | `rgba(255,255,255,0.95)` | Frosted glass panels |
| `--bg-surface-translucent` | `rgba(255,255,255,0.92)` | Translucent overlays |
| `--bg-surface-hover` | `#EEF2FF` | Hover fill on surfaces |
| `--bg-input` | `#F8FAFC` | Input field background |
| `--bg-track-muted` | `#F1F5F9` | Progress bar track |

### 3.3 Semantic Colours

#### Danger — ONE single red: `#E11D48`
> There is **one red** in this project. Do not introduce `#EF4444`, `#F43F5E`, or any other red variant.

| Variable | Value |
|---|---|
| `--color-danger` | `#E11D48` |
| `--color-danger-dark` | `#BE123C` |
| `--color-danger-bg` | `#FFF1F2` |
| `--color-danger-border` | `#FFE4E6` |
| `--color-danger-glow` | `rgba(225,29,72,0.25)` |

#### Success (green)
| Variable | Value |
|---|---|
| `--color-success` | `#059669` |
| `--color-success-alt` | `#10B981` |
| `--color-success-bg` | `rgba(16,185,129,0.12)` |
| `--color-success-soft-bg` | `#ECFDF5` |
| `--color-success-border` | `rgba(16,185,129,0.35)` |
| `--color-success-border-soft` | `#A7F3D0` |

#### Warning (amber)
| Variable | Value |
|---|---|
| `--color-warning` | `#D97706` |
| `--color-warning-alt` | `#F59E0B` |
| `--color-warning-dark` | `#B45309` |
| `--color-warning-bg` | `rgba(245,158,11,0.14)` |
| `--color-warning-soft-bg` | `#FEF3C7` |

#### Info (blue)
| Variable | Value |
|---|---|
| `--color-info` | `#0284C7` |
| `--color-info-bg` | `rgba(2,132,199,0.1)` |

### 3.4 Domain Tag Colours
| Domain | Foreground | Background |
|---|---|---|
| Academic | `--domain-academic` (`#4338CA`) | `--domain-academic-bg` |
| Group | `--domain-group` (`#0284C7`) | `--domain-group-bg` |
| Work | `--domain-work` (`#D97706`) | `--domain-work-bg` |
| Personal | `--domain-personal` (`#059669`) | `--domain-personal-bg` |

---

## 4. Typography

- **Body font:** `Nunito` (loaded from Google Fonts) — set via `--font-main`
- **Monospace font:** `JetBrains Mono` — set via `--font-mono`; used for numbers, percentages, time values, and badges
- Base `font-family` is set on `body` using `var(--font-main)` — never override on a component without a specific reason
- Standard weight scale: `500` (body), `600` (sub-label), `700` (label/button), `800` (heading/strong)

---

## 5. Spacing & Shape

### 5.1 Border Radius — Use the Scale
| Variable | Value | Typical use |
|---|---|---|
| `--radius-sm` | `8px` | Inputs, chips, small buttons |
| `--radius-md` | `14px` | Modals, badges, medium cards |
| `--radius-lg` | `20px` | Section cards |
| `--radius-xl` | `28px` | Hero cards |
| `--radius-full` | `9999px` | Pills, dots, FAB |

> Do not use raw pixel values for border-radius — always use the scale variables.

### 5.2 Shadow — Use the Scale
| Variable | Use |
|---|---|
| `--shadow-sm` | Subtle card lift |
| `--shadow-md` | Floating element |
| `--shadow-lg` | Toast / modal depth |
| `--shadow-glow` | Glow / focus ring effect |

---

## 6. Component Patterns

### 6.1 Cards
- Background: `var(--white)` or `var(--bg-surface-translucent)` for glassmorphic style
- Border: `1px solid var(--border-card)` (default) or `var(--border-subtle)`
- Border-radius: `--radius-lg` (section card) or `--radius-xl` (hero card)
- Shadow: `--shadow-sm` or a custom `primary-faint` drop shadow

### 6.2 Modals (Bottom Sheets)
- Triggered by adding `.active` to `.modal-overlay`
- Closed by removing `.active`
- The sheet slides up via CSS `transform: translateY` transition
- Use `openXxxModal()` / `closeXxxModal()` JS function pattern — one pair per modal

### 6.3 Buttons
| Class | Use |
|---|---|
| `.btn-action-primary` | Primary CTA (full-width, indigo fill) |
| `.btn-action-secondary` | Secondary action (ghost / muted) |
| `.btn-rebalance-pill` | Small pill action inside cards |
| `.link-action-btn` | Text-only inline action |
| `.dock-center-fab` | Central floating action button |
| `.icon-btn` | Icon-only circle button (header area) |
| `.close-btn` | Modal close button |

> Do not create ad-hoc `style=""` buttons — reuse the classes above.

### 6.4 Toast Notifications
- Use the shared `showToast(msg)` function — never create a second toast element.
- The single `#appToast` element is toggled via the `.visible` class.

### 6.5 Animations
- Entry/bounce: `gentleBounce` keyframe (companion avatar)
- State pulse: `pulse` keyframe (risk indicator dot)
- Hover transitions: `all 0.2s ease`
- Sheet slide: `0.35s cubic-bezier(0.16, 1, 0.3, 1)`
- General smooth: `0.25s cubic-bezier(0.4, 0, 0.2, 1)`

---

## 7. Mobile Phone Shell Rules

- `.device-container` is the phone boundary — all visible content lives inside it.
- `.app-viewport` is the scrollable content area; `padding-bottom` must account for the bottom dock (`95px`).
- `.mobile-bottom-dock` is always `position: absolute; bottom: 0` within `.device-container`.
- `.home-indicator` bar is always the bottom-most element (`z-index: 90`).
- Modals (`.modal-overlay`) are `position: absolute` inside `.device-container` so they respect the phone boundary.
- The page `body` only centres the phone shell — it has no app content of its own.

---

## 8. Adding a New Screen / View

Since everything lives in `index.html` with no page navigation:

1. Add the screen's HTML **inside `.app-viewport`** as a `<section>` with a unique `id`, hidden by default.
2. Add CSS for new components under a new banner section in `dashboard.css`.
3. Write JS functions to show/hide the screen (toggle `display`/`visibility` or swap innerHTML).
4. Link it to a dock tab via the existing `switchNavTab()` pattern or a card action.
5. **Do not create a new HTML file** — the phone shell stays whole in `index.html`.

---

## 9. Adding a New Colour or Token

1. Add the token to `:root` in `dashboard.css` under the correct group.
2. Reference it via `var(--token-name)` everywhere else.
3. Never use raw hex values outside `:root`.
4. For a new red-family colour — use `--color-danger` first. Only add a new token if it serves a different semantic purpose.

