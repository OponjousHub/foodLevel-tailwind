import JoinForm from "../components/join-form";
import commuMeal from "../assets/icons/meal.png";
import commuChef from "../assets/icons/community.png";
import commuEvent from "../assets/icons/events.png";

function CommunityPage() {
  return (
    <>
      <div className="container text-center mt-[5rem]">
        <h1 className="text-5xl font-bold text-amber-50">
          One sheared passion: <span className="span">Food</span>
        </h1>
        <p className="text-amber-100 text-[1.4rem] mt-4">
          Join our community and shear your favorite recipes!
        </p>
      </div>
      <div className="container text-center text-amber-50">
        <h2>Community Perks</h2>
        <div className="community-box">
          <img
            src={commuMeal}
            alt="community recipe"
            className="community-image"
          />
          <p>Shear and discover recipe</p>
        </div>
        <div className="community-box">
          <img
            src={commuChef}
            alt="community recipe"
            className="community-image"
          />
          <p>Shear and collaborate with cheffs</p>
        </div>
        <div className="community-box">
          <img
            src={commuEvent}
            alt="community recipe"
            className="community-image"
          />
          <p>Shear and cook like a cheff</p>
        </div>
      </div>
      <JoinForm />
    </>
  );
}
export default CommunityPage;
