

const projects = [
    {
        repo: "https://github.com/jockeBjers/Curly",
        title: "Curly",
        description: "En enkel HTTP-klient skrivbordapp byggd med Flutter för att snabbt testa REST-API:er. Skicka GET-, POST-, PUT-, PATCH- och DELETE-förfrågningar"
    },
    {
        demo: "https://isolkalkyl.web.app",
        title: "IsolKalkyl",
        description: "En webbapplikation för att beräkna materialåtgång för teknisk isolering"

    },
    {
        repo: "https://github.com/jockeBjers/isolApi",
        title: "IsolKalkylApi",
        description: "Då Isolkalkyl för nuvarande använder Firebase så är detta projekt menat att öva på Autentisering och säkerhet i .NET"
    },
    {
        demo: "https://mortal-weather.github.io/TempCheck/",
        repo: "https://github.com/Mortal-Weather/TempCheck",
        title: "TempCheck",
        description: "En väderapp som visar aktuell väderdata och prognoser genom att ansluta till en väder-API. Ingen auth, logga in med valfritt lösenord"
    },
     {
        repo: "https://github.com/Ett-bra-team-som-samarbetar-bra/ostgota-event",
        title: "OstgotaEvent",
        description: "Skolprojekt, en eventhanterare byggd med .NET och Blazor"
    },



];


const listElement = document.getElementById("carousel-list");

function renderCarousel() {
    listElement.innerHTML = "";
    projects.forEach((project) => {
        const li = document.createElement("li");
        li.className = "carousel-item";

        const title = document.createElement("div");
        title.className = "carousel-title";
        title.textContent = project.title;

        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent = project.description;

        const btns = document.createElement("div");
        btns.className = "carousel-buttons";

        if (project.repo) {
            const repoBtn = document.createElement("a");
            repoBtn.className = "carousel-btn repo-btn";
            repoBtn.href = project.repo;
            repoBtn.target = "_blank";
            repoBtn.innerHTML = '<i class="fa fa-github"></i> Repo';
            btns.appendChild(repoBtn);
        }

        if (project.demo) {
            const demoBtn = document.createElement("a");
            demoBtn.className = "carousel-btn demo-btn";
            demoBtn.href = project.demo;
            demoBtn.target = "_blank";
            demoBtn.innerHTML = '<i class="fa fa-external-link"></i> Live Demo';
            btns.appendChild(demoBtn);
        }

        li.appendChild(title);
        li.appendChild(description);
        li.appendChild(btns);

        listElement.appendChild(li);
    });
}

renderCarousel();

