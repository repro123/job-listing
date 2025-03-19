let jobs = [];
let selectedFilters = new Set();

// Fetch JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    jobs = data;
    renderJobs(jobs); // Initial render
  });

// Render jobs to the DOM
function renderJobs(jobsToRender) {
  const jobsContainer = document.querySelector("#jobs-container");
  jobsContainer.innerHTML = "";

  jobsToRender.forEach((job) => {
    const jobElement = createJobElement(job);
    jobsContainer.appendChild(jobElement);
  });
}

// Create HTML for a single job
function createJobElement(job) {
  const jobDiv = document.createElement("div");
  jobDiv.className = `job-card ${job.featured ? "featured" : ""}`;
  jobDiv.innerHTML = `
    <div class="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center w-full">
              <img src="${job.logo}" alt="${
    job.company
  }" class="w-16 h-16 -mt-10 md:m-0"/>
              <div class="grid gap-2">
                <div class="flex items-center gap-2">
                  <h2 class="text-primary font-bold text-xl">${job.company}</h2>
                  ${
                    job.new
                      ? '<span class="ml-2 bg-primary rounded-2xl px-2 py-1 grid place-items-center font-bold text-white pt-2 tracking-wider uppercase">New!</span>'
                      : ""
                  }
                  ${
                    job.featured
                      ? '<span class="bg-headings rounded-2xl px-2 py-1 grid place-items-center font-bold text-white pt-2 tracking-wider uppercase">Featured</span>'
                      : ""
                  }
                </div>

                <h3 class="text-headings font-bold text-xl md:text-2xl">${
                  job.position
                }</h3>

                <div
                  class="flex items-center gap-4 text-darkCyan font-medium md:font-bold"
                >
                  <p>${job.postedAt}</p>
                  <span aria-hidden="true">•</span>
                  <p>${job.contract}</p>
                  <span aria-hidden="true">•</span>
                  <p>${job.location}</p>
                </div>
              </div>
            </div>

             
    <div class="border-t border-t-darkCyan pt-4 md:border-0 md:pt-0 flex items-center gap-4 w-full flex-wrap md:justify-end">
      ${createFilterButtons(job)}
    </div>
  `;
  return jobDiv;
}

// Generate buttons for role, level, languages, and tools
function createFilterButtons(job) {
  const filters = [job.role, job.level, ...job.languages, ...job.tools];
  return filters
    .map(
      (filter) => `
    <button class="text-primary bg-filter-bg font-bold p-2 transition-colors duration-300 rounded-lg w-fit cursor-pointer hover:bg-primary outline-0 border-0 hover:text-filter-bg focus:bg-primary focus:text-filter-bg active:bg-primary active:text-filter-bg md:text-xl filter-btn" data-filter="${filter}">${filter}</button>
  `
    )
    .join("");
}

// Event delegation for filter buttons
document.querySelector("#jobs-container").addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const filter = e.target.dataset.filter;
    selectedFilters.add(filter);
    updateSearchBar(); // Show selected filters
    filterJobs(); // Apply filters
  }
});

function filterJobs() {
  const filteredJobs = jobs.filter((job) => {
    // Check if job includes ALL selected filters
    return Array.from(selectedFilters).every(
      (filter) =>
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter)
    );
  });
  renderJobs(filteredJobs);
}

function updateSearchBar() {
  const searchBar = document.querySelector("#search-bar");
  const filtersContainer = searchBar.querySelector("#filters-container");

  // Show search bar if filters are selected
  searchBar.style.display = selectedFilters.size ? "flex" : "none";

  // Render selected filters as tags
  filtersContainer.innerHTML = "";
  selectedFilters.forEach((filter) => {
    const filterTag = document.createElement("div");
    filterTag.className = "filter-tag";
    filterTag.innerHTML = `
      <span class="text-primary bg-filter-bg font-bold  w-fit p-2 md:text-xl grid place-items-center">${filter}</span>
      <button class="remove-filter text-white text-4xl bg-primary border-0 outline-0 grid place-items-center px-2 pt-1 md:pt-0 md:text-6xl cursor-pointer hover:bg-headings md:h-12 h-10 w-10 md:w-12" data-filter="${filter}">×</button>
    `;
    filtersContainer.appendChild(filterTag);
  });
}

// Event listener for removing filters
document.querySelector("#search-bar").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-filter")) {
    const filter = e.target.dataset.filter;
    selectedFilters.delete(filter);
    filterJobs();
    updateSearchBar();
  }
});

// Clear all filters
document.querySelector("#clearBtn").addEventListener("click", () => {
  selectedFilters.clear();
  renderJobs(jobs);
  updateSearchBar();
});
