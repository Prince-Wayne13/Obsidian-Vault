# T-Tech Website: Page Map

Public pages are open to everyone, including signed-in customers. The customer area is only for signed-in customers. Each page name in the outline is a link: click one and Obsidian creates a note for that page, where you can link its sketch.

_Tip: these drawings use a white background. Use Obsidian's light theme, or the lines may be hard to see in dark mode._

## Outline

- Home
    - Public pages (open to everyone)
        - [[About Us]]
        - [[Services]]
        - [[Products]]
            - [[Product Details]]
        - [[Portfolio]]
        - [[FAQs]]
        - [[Contact Us]]
        - [[How to Order]]
        - [[Artwork Guidelines]]
        - [[Policies]]
    - Customer area (signed-in customers only)
        - [[Register and sign in]]
        - [[My account]]
        - [[Get a quote]]
        - [[My quotes]]
            - [[One quote]]
        - [[My orders]]
            - [[One order]]

_"One order" is the Order Tracking page from the requirements document. See [[02 customer screens]] for how these screens connect._

## Drawing

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"17px","fontFamily":"Arial, sans-serif","primaryColor":"#FFFFFF","primaryTextColor":"#111111","primaryBorderColor":"#111111","lineColor":"#111111","secondaryColor":"#F3F4F6","tertiaryColor":"#FFFFFF","background":"#FFFFFF","edgeLabelBackground":"#FFFFFF","clusterBkg":"#F3F4F6","clusterBorder":"#111111"},"flowchart":{"nodeSpacing":55,"rankSpacing":65,"padding":24,"htmlLabels":true}}}%%
flowchart LR
    HOME(["&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;"])
    HOME --> PUB["&nbsp;&nbsp;&nbsp;Public pages&nbsp;&nbsp;&nbsp;"]
    HOME --> CUSTP["&nbsp;&nbsp;&nbsp;Customer area&nbsp;&nbsp;&nbsp;"]
    PUB --> P1["&nbsp;&nbsp;&nbsp;About Us&nbsp;&nbsp;&nbsp;"]
    PUB --> P2["&nbsp;&nbsp;&nbsp;Services&nbsp;&nbsp;&nbsp;"]
    PUB --> P3["&nbsp;&nbsp;&nbsp;Products&nbsp;&nbsp;&nbsp;"]
    P3 --> P3A["&nbsp;&nbsp;&nbsp;Product Details&nbsp;&nbsp;&nbsp;"]
    PUB --> P4["&nbsp;&nbsp;&nbsp;Portfolio&nbsp;&nbsp;&nbsp;"]
    PUB --> P5["&nbsp;&nbsp;&nbsp;FAQs&nbsp;&nbsp;&nbsp;"]
    PUB --> P6["&nbsp;&nbsp;&nbsp;Contact Us&nbsp;&nbsp;&nbsp;"]
    PUB --> P7["&nbsp;&nbsp;&nbsp;How to Order&nbsp;&nbsp;&nbsp;"]
    PUB --> P8["&nbsp;&nbsp;&nbsp;Artwork Guidelines&nbsp;&nbsp;&nbsp;"]
    PUB --> P9["&nbsp;&nbsp;&nbsp;Policies&nbsp;&nbsp;&nbsp;"]
    CUSTP --> C1["&nbsp;&nbsp;&nbsp;Register and sign in&nbsp;&nbsp;&nbsp;"]
    CUSTP --> C2["&nbsp;&nbsp;&nbsp;My account&nbsp;&nbsp;&nbsp;"]
    CUSTP --> C3["&nbsp;&nbsp;&nbsp;Get a quote&nbsp;&nbsp;&nbsp;"]
    CUSTP --> C4["&nbsp;&nbsp;&nbsp;My quotes&nbsp;&nbsp;&nbsp;"]
    C4 --> C4A["&nbsp;&nbsp;&nbsp;One quote&nbsp;&nbsp;&nbsp;"]
    CUSTP --> C5["&nbsp;&nbsp;&nbsp;My orders&nbsp;&nbsp;&nbsp;"]
    C5 --> C5A["&nbsp;&nbsp;&nbsp;One order&nbsp;&nbsp;&nbsp;"]
    class HOME,PUB,CUSTP decide
    classDef decide fill:#E5E7EB,stroke:#111111,stroke-width:2px,color:#111111
    classDef popup fill:#FFFFFF,stroke:#111111,stroke-width:3px,stroke-dasharray:6 4,color:#111111,font-weight:bold
    classDef final fill:#FFFFFF,stroke:#111111,stroke-width:5px,color:#111111,font-weight:bold
    linkStyle default stroke:#111111,stroke-width:2px
```