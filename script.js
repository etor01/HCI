let Nav = '';

function renderNav(){
    Nav +=   `
         <div class="container-fluid">
            <a href="#" class="navbar-brand justify-content-center fw-semibold">
                <img width="40" height="40" src="https://img.icons8.com/clouds/100/recycle-sign.png" alt="recycle-sign"/> EcoCycle
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item" title="See recycling guidelines">
                    <a href="#HowToRecycle" class="nav-link fw-semibold"><i class="bi bi-recycle text-success"></i> How To Recycle</a>
                    </li>
                    <li class="nav-item" title="Find a center near you">
                    <a href="#Location" class="nav-link fw-semibold"><i class="bi bi-geo-alt-fill text-success"></i> Center Near Me</a>
                    </li>
                    <li class="nav-item" title="Take a Quiz on recycling">
                    <a href="#quiz" class="nav-link fw-semibold"><i class="bi bi-patch-question-fill text-success"></i> Quiz</a>
                    </li>
                </ul>
            </div>
            </div>
    `;
}
renderNav();

document.querySelector('.navbar').innerHTML = Nav;

let Hero = '';

function renderHero(){
    Hero +=   `
         <div class="row justify-content-center py-3 mt-2">
            <div class="col-md-5 py-5 mt-1 text-center text-md-start">
                <h1>
                <div class="display-1 text-success">EcoCycle</div>
                <div class="display-6 text-muted">Recycle Right, every time!</div>
                </h1>
                <p class="lead my-4 text-muted lh-base">
                Make a positive impact on our planet today with our easy to use recycling guide.
                Learn what you can recycle, how to prepare it and where to take it. <br>
                Get started today and join the EcoCycle movement towards a more sustainable future.
                </p>
                <a href="#HowToRecycle" class="btn btn-success shadow btn-lg m-1">
                <i class="bi bi-recycle p-1"></i> Show me how
                </a>
            </div>
            <div class="col-md-5 py-1 mt-1 text-center d-none d-md-block">
                <img width="500" height="500" src="assests/recycle1.png" alt="recycle-sign"/>
            </div>
        </div>
    `;
}
renderHero();

document.getElementById('intro').innerHTML = Hero;