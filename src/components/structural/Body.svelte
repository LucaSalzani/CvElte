<script>
  import { _ } from "../../services/i18n";
  import SideColumn from "./SideColumn.svelte";
  import MainColumn from "./MainColumn.svelte";

  export const sideColumn = [
    {
      type: "contact",
      label: "side.about.title",
      details: [
        {
          subcategory: "side.about.general_title",
          contactDetails: [
            {
              text: "side.about.birthday",
            },
            {
              text: "side.about.language_de",
              icon: "language",
            },
            {
              text: "side.about.language_en",
              icon: "language",
            },
            {
              text: "side.about.language_frit",
              icon: "language",
            },
            {
              text: "side.about.location",
              icon: "location",
            },
          ],
        },
        {
          subcategory: "side.about.find_title",
          contactDetails: [
            {
              isLink: true,
              type: "email",
              text: "luca.salzani@gmail.com",
              icon: "email",
            },
            {
              isLink: true,
              type: "web",
              url: "https://www.linkedin.com/in/luca-salzani-21351394/",
              text: "linkedin.com/in/luca-salzani-21351394/",
              icon: "linkedin",
            },
          ],
        },
      ],
    },
    {
      type: "skills",
      label: "side.skills.title",
      details: [
        "C#",
        "Angular",
        "Clean Code",
        "CI/CD",
        "Scrum",
        "WPF",
        "SQL",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "side.skills.architecture",
        "PowerShell",
      ],
    },
    {
      type: "aboutcv",
      label: "side.cv.title",
      details: [
        {
          qrCode: "qr-code.png",
          url: "https://cv.salzani.work/",
          description: "side.cv.description",
          version: "v1.1",
        },
      ],
    },
  ];
  export const mainColumn = [
    {
      type: "full-details",
      label: "experience.title",
      details: [
        {
          title: "experience.zuehlke.title",
          subtitle: "Zühlke Engineering AG",
          dates: "experience.zuehlke.dates",
          location: "Schlieren, ZH",
          description: "experience.zuehlke.description",
          list: [
            "experience.zuehlke.details1",
            "experience.zuehlke.details2",
            "experience.zuehlke.details3",
            "experience.zuehlke.details4",
          ],
        },
        {
          title: "experience.baumann.title",
          subtitle: "Baumann Federn AG",
          dates: "08/2008 — 08/2015",
          location: "Ermenswil, SG",
          description: "experience.baumann.description",
          list: [
            "experience.baumann.details1",
            "experience.baumann.details2",
            "experience.baumann.details3",
            "experience.baumann.details4",
          ],
        },
      ],
    },
    {
      type: "full-details",
      label: "education.title",
      details: [
        {
          title: "education.fh.title",
          subtitle: "Ostschweizer Fachhochschule",
          dates: "09/2015 — 08/2018",
          location: "Rapperswil, SG",
          description: "education.fh.description",
        },
        {
          title: "education.bm2.title",
          subtitle: "Berufsbuildungszentrum Uster",
          dates: "08/2012 — 06/2014",
          location: "Uster, ZH",
          description: "education.bm2.description",
        },
      ],
    },
  ];
</script>

<div class="main-body">
  <MainColumn sections={mainColumn} />
  <SideColumn sections={sideColumn} />
</div>

<style>
  .main-body {
    display: flex;
    justify-content: space-between;
    flex-direction: var(--column-order);
    margin: 0 var(--horizontal-offset);
  }

  @media screen and (max-width: 620px) {
    .main-body {
      flex-direction: column;
  }
}
</style>
