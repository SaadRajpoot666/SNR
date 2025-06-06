import saaddev from "../../assets/images/saaddev.png"
import kstraders from "../../assets/images/kstraders.png"
import mrs from "../../assets/images/mrsenterprise.png"
import budgettracker from "../../assets/images/budgetTracker.png"
import form from "../../assets/images/access.png"
import "./Projects.css"
export const Projects = ()=>{

const cardsItems = [
    {id: 75349, name:"KS TRADERS", category:"Web Developement",img:kstraders},

    {id: 75339, name:"Saad.Dev", category:"Web Developement",img:saaddev},
    {id: 75389, name:"MRS ENTERPISES", category:"Web Developement",img:mrs},
    {id: 75379, name:"BUDGET TRACKER", category:"MS Excel",img:budgettracker},
    {id: 75399, name:"Form", category:"MS Access",img:form}
]

return <section id="projects" className=" ">
    <h1 className="text-4xl hover:scale-110 duration-150 transition-all cursor-pointer text-purple-600 font-extrabold text-center mb-[10%] mt-[10%] md:mt-[10%] md:mb-[15%]">Projects</h1>
    <div
        className="services-container grid grid-cols-1 sm:grid-cols-2 place-items-center  gap-3"
        
      >
        {cardsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white flex shadow-2xl flex-col card-box rounded-lg p-6 w-full sm:w-1/2 md:w-1/3 text-center "
 
          >
            <img src={item.img} alt={item.name} className="hover:scale-110 duration-150 transition-all" />
            <h3 className="text-gray-700  font-semibold text-lg mb-2">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm">{item.category}</p>
          </div>
        ))}
      </div>

</section>





}