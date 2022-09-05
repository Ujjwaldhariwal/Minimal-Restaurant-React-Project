import React from 'react'

const menucard = ({menuData}) => {
  return (
    <>
    <section className="main-card--container">

        {menuData.map((curEle)=>{
            const {id, name, category, image, description} = curEle;
            return(
                <>
                <div className="card-container" Key={id}>
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle ">
                                {id}
                            </span>
                            <span className="">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description ">{description} </span>
                            
                        </div>
                            <img src ={image} alt ="images" class-name="class-media"/>

                    </div>
                </div>
                </>
            );
        })};
    </section>
    </>
  )
}

export default menucard