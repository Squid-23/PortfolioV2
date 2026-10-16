import { useState } from "react";

import {
  useForm
} from "react-hook-form";


import {
  zodResolver
} from "@hookform/resolvers/zod";


import {
  z
} from "zod";


import {
  toast,
  Toaster
} from "sonner";


import {
  motion
} from "framer-motion";


import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram
} from "react-icons/fa";


import "./Contact.css";



const contactSchema = z.object({

  name: z
    .string()
    .min(
      3,
      "Nama minimal 3 karakter"
    ),


  email: z
    .string()
    .email(
      "Email tidak valid"
    ),


  message: z
    .string()
    .min(
      10,
      "Pesan minimal 10 karakter"
    )

});



type ContactForm = z.infer<
typeof contactSchema
>;





function Contact(){


const [loading,setLoading] =
useState(false);





const {

register,

handleSubmit,

reset,

formState:{
errors

}

}=useForm<ContactForm>({

resolver:zodResolver(contactSchema),

mode:"onChange"

});







const onSubmit = async(
data:ContactForm
)=>{


setLoading(true);



try{


const response =
await fetch(
"https://formspree.io/f/xnpnlaep",
{

method:"POST",

headers:{

"Content-Type":
"application/json",

Accept:
"application/json"

},

body:
JSON.stringify(data)

}

);




if(response.ok){


toast.success(
"Pesan berhasil dikirim!"
);


reset();


}

else{


toast.error(
"Gagal mengirim pesan"
);


}



}

catch{


toast.error(
"Terjadi kesalahan koneksi"
);


}


finally{


setLoading(false);


}



};








return(


<main className="contact-page">


<Toaster
position="top-right"
/>






<section className="contact-hero">


<div
className="container"

data-aos="fade-up"

>


<span className="contact-label">

CONTACT

</span>



<h1>

Mari Terhubung

</h1>



<p>

Punya ide project, ingin
berkolaborasi, atau berdiskusi
mengenai teknologi?

Silakan hubungi saya melalui
form berikut.

</p>


</div>


</section>








<section className="contact-section">


<div className="container contact-grid">








<motion.div

className="contact-info"


initial={{

opacity:0,

x:-60

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

duration:.7

}}


viewport={{

once:true

}}

>



<h2>

Mari Terhubung

</h2>




<p>

Saya terbuka untuk project,
kolaborasi, dan kesempatan
baru dalam pengembangan
aplikasi digital.

</p>







<div className="contact-social">



<a

href="https://github.com/Squarepants23"

target="_blank"

rel="noopener noreferrer"

>


<div>

<FaGithub/>

<span>
Github
</span>


</div>


<strong>
↗
</strong>


</a>






<a

href="https://www.linkedin.com/in/muhammadrifqifaizal23"

target="_blank"

rel="noopener noreferrer"

>


<div>

<FaLinkedin/>

<span>
LinkedIn
</span>


</div>


<strong>
↗
</strong>


</a>








<a

href="https://www.instagram.com/zall_23j"

target="_blank"

rel="noopener noreferrer"

>


<div>

<FaInstagram/>

<span>
Instagram
</span>


</div>


<strong>
↗
</strong>


</a>







<a

href="https://wa.me/6288985715254"

target="_blank"

rel="noopener noreferrer"

>


<div>

<FaWhatsapp/>

<span>
WhatsApp
</span>


</div>


<strong>
↗
</strong>


</a>




</div>






</motion.div>









<motion.form


className="contact-form"


onSubmit={
handleSubmit(onSubmit)
}



initial={{

opacity:0,

y:60

}}


whileInView={{

opacity:1,

y:0

}}


transition={{

duration:.7,

delay:.15

}}


viewport={{

once:true

}}



>




<h2>

Kirim Pesan

</h2>







<input

type="text"

placeholder="Nama"

{...register("name")}

/>


{
errors.name &&

<p className="error">

{errors.name.message}

</p>

}








<input

type="email"

placeholder="Email"

{...register("email")}

/>


{
errors.email &&

<p className="error">

{errors.email.message}

</p>

}








<textarea

rows={6}

placeholder="Tuliskan pesan kamu..."

{...register("message")}

/>



{
errors.message &&

<p className="error">

{errors.message.message}

</p>

}







<button

disabled={loading}

>


{

loading

?

"Mengirim..."

:

"Kirim Pesan"

}


</button>




</motion.form>






</div>


</section>





</main>


);


}



export default Contact;