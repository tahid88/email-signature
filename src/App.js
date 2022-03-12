

import {IoIosCall} from 'react-icons/io'
import {BsFacebook,BsLinkedin} from 'react-icons/bs'
import {AiTwotoneMail,AiOutlineLink ,AiFillTwitterCircle ,AiFillInstagram} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import './styles.css';
import {useState} from 'react';
import {HtmlCode} from './HtmlCode'
import {rawCodeFuncs} from './rawCodeFunc'





export default function App(){

  const [surname,setSurname]  = useState("")
  const [title,setTtitle]  = useState("")
  const [team,setTeam]  = useState("")
  const [gender,setGender]  = useState("")
  const [phone,setPhone]  = useState("")
  const [email,setEmail]  = useState("")
  const [web,setWeb]  = useState("")
  const [location,setLocation]  = useState("")
  const [copy,setCopy] = useState(false)

// handle copy html code
const copyCodeToClipboard = () => {
    const el = this.textArea
    // if (copy) { // if already copied , then remove highlight and  deselect the text area
    //   document.getSelection().removeAllRanges()
    // }else{ // if textarea is not copied , then highligh the selected the text area
    //   el.select()
    // }
    
    document.execCommand("copy")
    setCopy(!copy)
  }



  return <>
      <section className="container" style={{padding:"0 10vw"}}>
        <div className="info d-flex w-100" style={{}}>
             <div className="info-data 
              w-50 " style={{display:"flex",flexDirection:"column",textAlign:"start",justifyContent:"center"}}>
                
                    <div className="" style={{fontSize:"1.2rem",fontWeight:"bold"}}>
                      {surname || "Name Surname"}
                    </div>
                    <div className="" style={{}}>
                      {title || "title"}
                    </div>
                    <div className="" style={{}}>
                      {team || "team"}
                    </div>
                    <div className="" style={{}}>
                      {gender || "gender"}
                    </div>
               
                
              </div>
              <div className="image w-50" style={{}}>
                  <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                      alt="profile"
                      style={{}}
                      className="mw-100 "
                  />
              </div>
         </div>

         <hr color="red"/>

         {/* another div started */}
        <div className="contact" style={{}}> 
            <div className="" style={{display:"flex", alignItems:"center"}}> 
                <div style={{}} className="text-primary pr"><IoIosCall /> </div>
                <div style={{}}> {phone || "9358392843"}</div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><AiTwotoneMail /> </div>
                <div style={{}}> {email || "example@gmail.com"} </div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><AiOutlineLink /> </div>
                <div style={{}}> {web || "www.example.com"}</div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><GoLocation /> </div>
                <div style={{}}> {location || "California , USA"} </div>
            </div>
        </div>

        <hr color="red" />


        {/* social icons */}

        <div style={{display:"flex",justifyContent:"end"}}> 
            <BsFacebook size={24}/>
            <AiFillTwitterCircle size={24}/>
            <AiFillInstagram size={24}/>
            <BsLinkedin size={24}/>
        </div>

        <div style={{paddingTop:"20px"}}> 
            <div><pre>surname: <input value={surname} onChange={(e)=>setSurname(e.target.value)} />  </pre></div>
            <div> <pre>title  : <input value={title} onChange={(e)=>setTtitle(e.target.value)} /></pre> </div>
            <div> <pre>team   : <input value={team} onChange={(e)=>setTeam(e.target.value)} /></pre></div>
            <div> <pre>gender : <input value={gender} onChange={(e)=>setGender(e.target.value)} />   </pre> </div>
            <div> <pre>phone  : <input value={phone} onChange={(e)=>setPhone(e.target.value)} /></pre> </div>
            <div> <pre>email  : <input value={email} onChange={(e)=>setEmail(e.target.value)} /></pre> </div>
            <div> <pre>web    : <input value={web} onChange={(e)=>setWeb(e.target.value)} /></pre> </div>
            <div> <pre>location:<input value={location} onChange={(e)=>setLocation(e.target.value)} /></pre> </div>      
        </div>


        <div style={{padding:"20px" ,marginTop:"50px", backgroundColor:"lightgray"}}>
            <textarea
                ref={(textarea) => this.textArea = textarea}
                className="w-100 h-50"
                value= {rawCodeFuncs({surname,title,team,gender,phone,email,web,location})}
            />
           
          
        </div>
        <button style={{width:"100%",fontSize:"1.5rem"}} 
          onClick={()=>copyCodeToClipboard()}
        >{copy ? "copied" : "copy code"}</button>
       </section>
  </>

}




