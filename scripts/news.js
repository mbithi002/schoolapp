// news text feeder

const cs = document.getElementById('cs');
const elections = document.getElementById('elections');
const sports = document.getElementById('sports');
const newsTextFeeder = document.getElementById('news-text-feeder');


cs.addEventListener('click' , () => {
    newsTextFeeder.innerHTML = `
    <h5>Cabinet Secretary For Education Visits:</h5>
    <br>
    <div class="row mx-2">
      <div class="col-md-6" style="border-left: #21513b 2px solid;">
        <p>
          We are honored to announce that the Cabinet Secretary of Education will be visiting our esteemed institution, [School Name]. This momentous occasion marks a significant opportunity for us to showcase the exemplary educational practices and achievements that define our school community.

          During the visit, the Cabinet Secretary will have the opportunity to witness firsthand the innovative teaching methodologies, rigorous academic standards, and vibrant extracurricular programs that are integral to the holistic development of our students. From interactive classroom demonstrations to engaging discussions with faculty and students, the visit will provide valuable insights into the transformative impact of education at [School Name].
        </p>
      </div>
      <div class="col-md-6">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="resources/images/cs1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
            <div class="carousel-item">
              <img src="resources/images/cs2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
            <div class="carousel-item">
              <img src="resources/images/cs3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    `;
});

elections.addEventListener('click' , () => {
    newsTextFeeder.innerHTML = `
    <h5>Student Elections Are Ongoing:</h5>
                <br>
                <div class="row mx-2">
                  <div class="col-md-6" style="border-left: #21513b 2px solid;">
                    <p>
                    It's that time of year again at [School Name] – student elections are just around the corner! As we gear up for this exciting event, we encourage all students to consider stepping up and becoming leaders within our school community. Whether you're passionate about representing your peers, initiating positive change, or shaping the future of our school, student elections provide a platform for you to make your voice heard. From campaigning with creative slogans to participating in lively debates, the election process is an opportunity for students to engage in democracy and exercise their leadership skills. We invite all students to get involved, cast their votes, and help shape the future direction of our school.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="resources/images/elections1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/elections2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/elections3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
    `;
});

sports.addEventListener('click' , () => {
    newsTextFeeder.innerHTML = `
    <h5>Sports:</h5>
    <br>
    <div class="row mx-2">
      <div class="col-md-6" style="border-left: #21513b 2px solid;">
        <p>Sports are an integral part of life at [School Name], fostering teamwork, discipline, and a healthy competitive spirit among our students. From thrilling matches on the field to exhilarating competitions in the gym, our sports program offers something for everyone. Whether you're a seasoned athlete or a newcomer to the game, there are plenty of opportunities to get involved and pursue your passion for sports. Our dedicated coaches provide expert guidance and support, helping students develop their skills and reach their full potential. Join us in celebrating the power of sports to inspire excellence, build camaraderie, and promote lifelong fitness and well-being.
        </p>
      </div>
      <div class="col-md-6">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="resources/images/sports1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
            <div class="carousel-item">
              <img src="resources/images/sports2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
            <div class="carousel-item">
              <img src="resources/images/sport3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    `;
});