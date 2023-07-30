import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}  style={{height:"8cm",width:"16cm"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/><br/>
          <a href={webUrl} style={{textDecoration:"none", color:"white", fontWeight:"900"}}><span>Click Here To See</span></a>
        </div>
      </div>
    </Col>
  )
}