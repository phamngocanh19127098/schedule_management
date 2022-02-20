import{ useNavigate} from 'react-router-dom';
import NewMeeupForm from "../components/meetups/NewMeeupForm";
function NewMeetupPage() {
  const history = useNavigate();
  function addMeetupHandler(meetupData){
      fetch(
        'https://react-getting-started-7e4bf-default-rtdb.firebaseio.com/meetups.json',{
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers : {
            'Content-Type' : 'application/json'
          }
        }
      ).then(()=>{
        history('/')
      });  
  }
    return <section>
      <h1> Add new Meetup</h1>
      <NewMeeupForm onAddMeetup={addMeetupHandler}/>
    </section>
    
  }
  
  export default NewMeetupPage;