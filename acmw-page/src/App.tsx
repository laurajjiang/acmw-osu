import React from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<p>About </p>
		<section className="text"> 
The Association of Computing Machinery, Women's Chapter (ACM-W) is a club at Oregon State University that promotes women in computing. We welcome all students who are interested in computer science or electrical/computer engineering. We are aiming to create a community that supports women and other underrepresented minorities in the field of computing. 
		</section>
		<p>Club Info</p>
		<section className="text">
We meet on even weeks every term (week 2, 4, 6, 8, and 10) in Kelley Engineering Center, Room 1005 from 5:30 - 6:30 PM.
		</section>
		<p>Officers & Contact</p>
		<section className="text">
Contact all of the officers at our general email <a href={`mailto:osu.acmw@gmail.com`}>here</a>.
<br/> <br/>
Our current president is <a href={`mailto:vasishta@oregonstate.edu`}>Anjali Vasisht</a>, who is majoring in Applied Computer Science with a focus in business. 
<br/> 
Our current vice-president is <a href={`mailto:jianglau@oregonstate.edu`}>Laura Jiang</a>, who is majoring in Applied Computer Science with a custom focus. 
		</section>
		<p>Previous Meetings</p>
		<section className="text">
			<li>Resumes and LinkedIn</li>
			<li>Confidence and Technical Questions</li>
			<br/><br/>
		</section>
      </header>
    </div>
  );
}

export default App;
