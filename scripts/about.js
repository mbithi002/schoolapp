
// abouttextholder feeder

const philosophy = document.getElementById("philosophy");
const history = document.getElementById("history");
const leadership = document.getElementById("leadership");
const staff = document.getElementById("staff");
const aboutTextHolder = document.getElementById("about-text-holder");

philosophy.addEventListener("click", () => {
  aboutTextHolder.innerHTML = `
  <h2>Our Philosophy</h2>
  <h5> Mission </h5>
  <p>
  At our campus, our mission is to empower students to become lifelong learners, critical thinkers, and compassionate leaders. Through rigorous academic programs, experiential learning opportunities, and a supportive community, we strive to foster intellectual curiosity, creativity, and social responsibility. Our aim is to prepare students to navigate complex challenges with confidence, integrity, and a commitment to positive change.
  </p>
  <p>
  Our vision is to cultivate a campus culture that celebrates diversity, fosters innovation, and inspires excellence in all endeavors. We envision a dynamic learning environment where students are empowered to explore their passions, embrace new ideas, and contribute meaningfully to the global community. Our goal is to be recognized as a premier institution of higher education that equips graduates with the knowledge, skills, and mindset to thrive in an ever-evolving world.
  </p>
  <h5>
      Core Values:
  </h5>
  <p>
      <strong>Excellence:</strong> We are committed to upholding the highest standards of academic rigor, teaching excellence, and continuous improvement in all aspects of our work.
      <strong>Inclusivity: </strong>We embrace diversity in all its forms and strive to create an inclusive campus community where every individual feels valued, respected, and supported.
      <strong>Integrity:</strong> We conduct ourselves with honesty, transparency, and ethical integrity in all interactions, fostering a culture of trust and accountability.
      Collaboration: We believe in the power of collaboration and teamwork to achieve our shared goals, leveraging the diverse talents and perspectives of our community members.
      <strong>Service:</strong> We are dedicated to serving the needs of our students, faculty, staff, and broader community, making a positive impact through civic engagement, outreach, and service-oriented initiatives.
      <strong>Innovation: </strong>We embrace innovation and creativity as drivers of positive change, encouraging experimentation, risk-taking, and entrepreneurial thinking to address complex challenges and seize new opportunities.
  </p>
    `;
});

history.addEventListener("click", () => {
  aboutTextHolder.innerHTML = `
    <h2>
        Our History:   
    </h2>

    <p>
        <strong>
        Celebrating Milestones and Memories
        </strong>
        Since our inception, our campus has been a beacon of learning, growth, and innovation. Our journey is marked by a rich tapestry of milestones, achievements, and transformative moments that have shaped who we are today. Join us as we embark on a nostalgic journey through the annals of our history, celebrating the legacy of our past and the promise of our future.
    </p>

    <p>
        <strong>Founding Years</strong>
        Our story begins with a vision – a vision to establish an institution dedicated to excellence in education and service to the community. In [Year of Foundation], a group of visionary educators and community leaders came together to lay the foundation for what would become our beloved campus. With determination and perseverance, they transformed a dream into reality, creating a hub of learning that would serve generations to come.
    </p>

    <p>
        <strong>
            Growth and Expansion
        </strong>
        As the years passed, our campus experienced remarkable growth and expansion, fueled by a commitment to academic excellence and a spirit of innovation. From humble beginnings, we evolved into a thriving academic community, offering a diverse range of programs and opportunities for students from all walks of life. New buildings rose, faculty joined, and partnerships flourished, cementing our place as a leading institution in the region.
    </p>

    <p>
        <strong>
        Pioneering Initiatives
        </strong>
        Throughout our history, we have been at the forefront of pioneering initiatives that have shaped the landscape of higher education. From launching innovative research programs to championing social justice causes, we have always been driven by a desire to make a positive impact on the world around us. Our commitment to innovation and excellence continues to propel us forward, inspiring future generations to dream big and reach for the stars.
    </p>

    <p>
        <strong>
        Community Engagement
        </strong>
        At the heart of our history lies a deep commitment to community engagement and service. We believe in the power of education to transform lives and uplift communities, and we have worked tirelessly to extend our reach beyond the walls of our campus. Through outreach programs, partnerships with local organizations, and service-learning opportunities, we have fostered meaningful connections and made a tangible difference in the lives of those we serve.
    </p>

    <p>
        <strong>
        Looking Ahead
        </strong>
        As we reflect on our history, we are filled with gratitude for the countless individuals who have contributed to our success – faculty, staff, students, alumni, and community partners alike. Their dedication, passion, and resilience have been the driving force behind our journey, propelling us forward even in the face of adversity. As we look ahead to the future, we remain committed to honoring our past while embracing new opportunities for growth, innovation, and positive change. Together, we will continue to write the next chapter of our storied history, guided by our shared values and a steadfast commitment to excellence.
    </p>
    `;
});

leadership.addEventListener( 'click', () => {
    aboutTextHolder.innerHTML = `
    <h2>Leadership Council:</h2>
    <strong> Guiding Our Campus Towards Excellence</strong>
    <p>
The Leadership Council serves as the guiding force behind our institution, providing strategic direction, oversight, and stewardship of our mission and values. Comprised of distinguished leaders from various sectors, the council brings together a wealth of expertise, experience, and perspectives to inform decision-making and drive innovation.
</p>

<strong>Visionary Leadership</strong>
<p>
At the helm of the Leadership Council are visionary leaders who possess a deep commitment to the advancement of higher education and the success of our campus community. With a focus on collaboration, transparency, and accountability, they work collaboratively with faculty, staff, students, and stakeholders to shape the future direction of our institution.
</p>

<strong>Strategic Planning and Governance</strong>
<p>
The Leadership Council plays a pivotal role in strategic planning and governance, setting priorities, goals, and objectives that align with our mission and vision. Through thoughtful deliberation and informed decision-making, they ensure that our institution remains responsive to the evolving needs of our students, the community, and the broader higher education landscape.
</p>

<strong>
Advocacy and Engagement</strong>
<p>
As ambassadors for our institution, members of the Leadership Council advocate for the interests of our campus community and foster meaningful connections with external stakeholders. Through their engagement with alumni, donors, government officials, and industry partners, they champion the value of higher education and the transformative impact of our programs and initiatives.</p>

<strong>Commitment to Excellence</strong>
<p>
Above all, the Leadership Council is guided by a steadfast commitment to excellence in all aspects of our work. By upholding the highest standards of integrity, transparency, and accountability, they inspire trust and confidence among our stakeholders and ensure that our institution remains a beacon of learning, innovation, and opportunity for generations to come.
</p>
<h6>Together, the Leadership Council and our campus community are united by a shared vision of excellence, inclusion, and service, working collaboratively to create a brighter future for all.</h6>
    `;
});

staff.addEventListener("click", () => {
    aboutTextHolder.innerHTML = `
    <h2>Meet Our Staff: </h2>
    
    <strong>A Community of Excellence</strong>
    <p>
        Behind every success story at our campus stands a team of dedicated professionals who work tirelessly to support our mission, inspire our students, and shape the future of our institution. Get to know the faces behind the scenes as we introduce you to the talented individuals who make up our diverse and dynamic staff community.
    </p>
    <strong>Leadership Team</strong>
    <p>
        At the helm of our institution is a team of visionary leaders who bring expertise, experience, and passion to their roles. From our President and Provost to our Vice Presidents and Deans, our leadership team is committed to guiding our campus with integrity, innovation, and a relentless pursuit of excellence.
    </p>
    <strong>Faculty Members</strong>
    <p>
        Central to our academic mission are our esteemed faculty members, who are renowned experts in their fields and dedicated mentors to our students. Committed to both teaching and research, our faculty members inspire critical thinking, creativity, and intellectual curiosity in the classroom and beyond. With their guidance, our students are empowered to reach new heights of achievement and make meaningful contributions to society.
    </p>
    <strong>Administrative Staff</strong>
    <p>
        Behind the scenes, our administrative staff members work diligently to ensure the smooth operation of our campus and the support of our students, faculty, and staff. From admissions and enrollment services to finance, human resources, and facilities management, our administrative team plays a vital role in every aspect of campus life. Their dedication, professionalism, and attention to detail are the bedrock of our institution's success.
    </p>
    <strong>Support Services</strong>
    <p>
        In addition to our academic and administrative staff, our campus is supported by a network of dedicated professionals who provide essential services and resources to our community. From counseling and student support services to IT support, library services, and campus safety, these individuals are committed to fostering a safe, inclusive, and supportive environment where all members of our community can thrive.
    </p>
    <strong>Get to Know Us</strong>
    <p>
        As you explore our campus, we invite you to take the time to get to know our staff members – to learn about their backgrounds, passions, and contributions to our community. Whether you encounter them in the classroom, the office, or the campus grounds, you'll find that each member of our staff brings a unique perspective and expertise to our campus, enriching the educational experience for all. Together, we are united by a shared commitment to excellence, innovation, and the success of every member of our campus community.
    </p>
    `;
});
