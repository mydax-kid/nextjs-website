import Hero from '../components/Hero'

const Contact = () => {
  return(
    <div>
      <Hero heading= 'My Contacts' message= 'Dont be afraid to reach out' />
      <div className= 'max-w-[1240px] mx-auto h-screen '>
        <h1 className= 'font-bold text-2xl text-center'>Lets work together</h1>
        <form 
          onSubmit= {e => e.preventDefault()}
          className= 'flex flex-col items-center justify-center px-2 py-6 md:p-10 space-y-4 text-black'
        >
          <input type= 'text' placeholder= 'Name:' className= 'border-b-2 w-9/12 md:w-1/2 lg:w-5/12  outline-0' />
          <br></br>:
          <input type= 'email' placeholder= 'Email:' className= 'border-b-2 w-9/12 md:w-1/2 lg:w-5/12 outline-0' />
          <br></br>
          <input type= 'text' placeholder= 'Subject:' className= 'border-b-2 w-9/12 md:w-1/2 lg:w-5/12 outline-0'/>
          <br></br>
          <textarea cols= '30' rows= '2' placeholder= 'Message:' className= 'border-b-2 w-9/12 md:w-1/2 lg:w-5/12 outline-0'/>
          <br></br>
          <button className= 'bg-green-700 text-white px-4 py-2 rounded hover:bg-lime-700'>Submit</button>
        </form>
      </div>
    
    </div>
  )
}

export default Contact;