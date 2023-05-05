import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Yash Chauhan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
      <body>
    {/* <!-- header start --> */}
    <header>
        <div id="header">
            <div class="contain">
                <nav>
                    <a href="https://www.youtube.com/watch?v=AlnHNi0hdO0"><img src="./styles/portfolioimages/messi.jpg"
                            alt="Messi" class="messi"></img></a>
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#about">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
                    </ul>
                    <i class="fa-solid fa-bars" onclick="openmenu()"></i>
                </nav>
            </div>
            <div class="headercontent">
                <div class="headertext">
                    <p>Web Developer</p>
                    <h1>Hey, This is <br></br><span class="yash">Yash</span> Chauhan</h1>
                </div>
                <img src="portfolioimages/Yashpic5.jpg" alt="Yash at INOX" class="yashpic"></img>
            </div>
        </div>
    </header>
    {/* <!-- header break --> */}
    {/* <!-- about start --> */}
    <section id="about">
        <section class="row">
            <section class="imagecol">
                <img src="portfolioimages/Yashpic3.jpg" alt="" class="aboutimage"></img>
            </section>
            <section class="textcol">
                <h1 class="subtitle">About Me</h1>
                <p>I am a BS Physics first-year undergraduate at the Indian Institute of Technology, Kanpur. I'm
                    proficient with utilities like Git, Github, HTML5, and CSS3. I can code in Java, C, and Python well.
                    I'm currently learning full-stack web development from the Web Development Bootcamp by Colt Steele.
                    I'm also doing a course on Data Science with Python by coincent. My interests include Web3, Web and
                    App development, Machine Learning, and Data Science. My other interests apart from programming
                    include football, music, and international relations.</p>
                <section class="tabtitles">
                    <p class="tablinks activelink" onclick="opentab('skills')">Skills</p>
                    <p class="tablinks" onclick="opentab('experience')">Experience</p>
                    <p class="tablinks" onclick="opentab('education')">Education</p>
                </section>
                <section class="tabcontents activetab" id="skills">
                    <ul>
                        <li><span>Coding</span><br></br>Java, C, Python, JavaScript, Golang</li>
                        <li><span>Web Development</span><br></br>HTML5, CSS3, ReactJS</li>
                        <li><span>Utilites</span><br></br>Git, Github, Firebase, PostgreSQL</li>
                    </ul>
                </section>
                <section class="tabcontents" id="experience">
                    <ul>
                        <li><span>Junior Executive</span><br></br>TOSC, Techkriti</li>
                        <li><span>Takneek</span><br></br>P-Club: Web and App Team</li>
                        <li><span>Volunteer</span><br></br>Antaragni</li>
                    </ul>
                </section>
                <section class="tabcontents" id="education">
                    <ul>
                        <li><span>2022-Present</span><br></br>BS Physics, IIT Kanpur</li>
                        <li><span>2019-2021</span><br></br>PCM+CS, St. George's College, Agra</li>
                        <li><span>2006-2019</span><br></br>Science, St. George's College, Agra</li>
                        <li><span>2005-2006</span><br></br>Playschool, Green House, Agra</li>
                    </ul>
                </section>
            </section>
        </section>
    </section>
    {/* <!-- about end */}
    {/* work start --> */}
    {/* <!-- work end */}
    {/* contact start --> */}
    <section id="contact">
        <section class="contactrow">
            <section class="contactleft">
                <h1 class="subtitle">Contact Me</h1>
                <p><a href="mailto:yashlm1017@gmailcom"><i class="fa-sharp fa-solid fa-envelope"></i>
                        yashlm1017@gmail.com</a></p>
                <p><a href="mailto:yashc22@iitk.ac.in"><i class="fa-sharp fa-solid fa-envelope"></i>
                        yashc22@iitk.ac.in</a></p>
                <p><i class="fa-sharp fa-solid fa-phone"></i> <span class="mobile">9837090171</span></p>
                <section class="socialicons">
                    <a href="https://www.instagram.com/_yashh20/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100006151927034"><i
                            class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/Yash20_lm"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/yash-chauhan-10b696250"><i
                            class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/yashlm"><i class="fa-brands fa-github"></i></a>
                </section>
                {/* <!-- <a href="">Click Me!</a> --> */}
            </section>
            <section class="contactright">
                <form action="chillhai" name="submit-to-google-sheet">
                    <div>
                        {/* <!-- <label for="name">Name:</label> --> */}
                        <input class="formwidth" type="text" placeholder="Enter your name" id="name" name="Name"
                            required></input>
                    </div>
                    <br></br>

                    <div>
                        {/* <!-- <label for="email">Email:</label> --> */}
                        <input class="formwidth" type="email" placeholder="Enter your email" id="email" name="Email"
                            required></input>
                    </div>
                    <br></br>

                    <div>
                        {/* <!-- <label for="message" id="message">Message:</label> --> */}
                        <textarea placeholder="Enter your message" id="message" name="Message" rows="6"></textarea>
                    </div>
                    <br></br>

                    <span>
                        <button class="btn">Submit!</button>
                    </span>
                    <span id="msg"></span>
                </form>

            </section>
        </section>
        <footer>
            <p>Copyright &#169; 2023 <br></br> <span>All Rights Reserved</span> <br></br>(Work section hasn't been added yet)</p>
        </footer>
    </section>
    {/* <script>
        var tablinks = document.getElementsByClassName("tablinks");
        var tabcontents = document.getElementsByClassName("tabcontents");
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("activelink");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("activetab");
            }
            event.currentTarget.classList.add("activelink");
            document.getElementById(tabname).classList.add("activetab");
        }
    </script>

    <script>

        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-150px";
        }

    // </script>
    // <!-- <form name="submit-to-google-sheet">
    //     <input name="email" type="email" placeholder="Email" required>
    //     <button type="submit">Send</button>
    //   </form> -->

    <script>
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx-tZn8RAeH68Z6oeOs2knhMn8R20rpN6VpNvjDXdqo_QtHPMWeSkZU3MS3gfoXrYIb_g/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message has been sent!"
                    setTimeout(function () {
                        msg.innerHTML = ""
                    }, 5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })
    </script> */}
              </body>
              </div>
    </>
  )
}
