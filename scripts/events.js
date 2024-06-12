
// Events text holder feeder
const tech = document.getElementById('tech');
const medical = document.getElementById('medical');
const music = document.getElementById('music');
const eventsTextFeeder = document.getElementById('events-text-feeder')

tech.addEventListener('click' , () => {
    eventsTextFeeder.innerHTML = `
    <h5>Annual Tech Expo:</h5>
                <br>
                <div class="row mx-2">
                  <div class="col-md-6" style="border-left: #21513b 2px solid;">
                    <p>
                      The annual Tech Expo at [School Name] is a highly anticipated event that showcases the innovative projects and technological prowess of our students. From cutting-edge robotics demonstrations to interactive virtual reality experiences, the Tech Expo provides a platform for students to explore emerging technologies and demonstrate their creativity and skills. With engaging presentations, hands-on workshops, and inspiring keynote speakers, the Expo fosters a culture of curiosity and innovation, inspiring the next generation of technologists and problem-solvers. Join us at the Tech Expo and witness the future of technology unfold right before your eyes.
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
                          <img src="resources/images/techexpo1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/techexpo2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/techexpo3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
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

music.addEventListener('click' , () => {
    eventsTextFeeder.innerHTML = `
    <h5>Music Festivals: </h5>
                <br>
                <div class="row mx-2">
                  <div class="col-md-6" style="border-left: #21513b 2px solid;">
                    <p>
                    Immerse yourself in the rhythm and melody at [School Name]'s annual Music Festival, where talent takes center stage and melodies fill the air with enchantment. From soulful solo performances to electrifying ensemble acts, our festival celebrates the diversity and artistry of music in all its forms. Whether you're a classical aficionado, a jazz enthusiast, or a rock and roll rebel, there's something for everyone at our Music Festival. Join us for a harmonious journey of melodies and memories that will resonate long after the final note fades away.
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
                          <img src="resources/images/musicfestivals1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/musicfestivals2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                        </div>
                        <div class="carousel-item">
                          <img src="resources/images/musicfestivals3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
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

medical.addEventListener('click' , () => {
    eventsTextFeeder.innerHTML = `
        <h5>Medical Research: </h5>
        <br>
        <div class="row mx-2">
        <div class="col-md-6" style="border-left: #21513b 2px solid;">
            <p>
                Dive into the fascinating world of medical research at [School Name], where innovation meets compassion in the pursuit of groundbreaking discoveries. Our dedicated researchers are at the forefront of scientific inquiry, exploring new treatments, therapies, and diagnostic tools to improve healthcare outcomes and enhance quality of life. From studying rare diseases to unraveling the complexities of the human body, our research initiatives span a wide range of disciplines, driving advancements in medicine and patient care. Join us in our quest to unlock the mysteries of health and disease, as we work tirelessly to make a meaningful impact on the future of healthcare.
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
                <img src="resources/images/medicalresearch1.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                </div>
                <div class="carousel-item">
                <img src="resources/images/medicalresearch2.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
                </div>
                <div class="carousel-item">
                <img src="resources/images/medicalresearch3.jpg" class="d-block w-100" alt="" class="img-fluid" style="height: 20rem; width: 18rem;">
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