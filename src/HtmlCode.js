export function HtmlCode({surname,title,team,gender,phone,email,web,location}){
  return ` <div className="info d-flex w-100" style={{}}>
             <div className="info-data 
              w-50 " style={{display:"flex",flexDirection:"column",textAlign:"start",justifyContent:"center"}}>
                
                    <div className="" style={{fontSize:"1.2rem",fontWeight:"bold"}} >
                      ${surname}
                    </div>
                    <div className="" style={{}}>
                      ${title}
                    </div>
                    <div className="" style={{}}>
                      ${team}
                    </div>
                    <div className="" style={{}}>
                      ${gender}
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
                <div style={{}}> ${phone}</div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><AiTwotoneMail /> </div>
                <div style={{}}> ${email} </div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><AiOutlineLink /> </div>
                <div style={{}}> ${web}</div>
            </div>
            <div className="" style={{display:"flex"}}> 
                <div style={{}} className="text-primary pr"><GoLocation /> </div>
                <div style={{}}> ${location} </div>
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

`
}