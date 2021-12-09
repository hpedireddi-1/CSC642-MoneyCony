import Header from './header';
import Footer from './footer';
import '../Styles/profile.css';

function Profile() {
	return (
		<div>
			<Header />
			<div className="profile-name">Steve Rogers</div>

			<div className="profile-info">
				<div>Username: captain_america3</div>
				<div>Email: cp3@sheild.gov</div>
				<div>
					Description: America’s World War II Super-Soldier continues his fight in the present as an Avenger
					and untiring sentinel of liberty.
				</div>

				<div>Groups: United States Army, SHEILD, Avengers</div>

                <button className="edit-button">Edit Description</button>
                <button className="changePassword-button">Change Password</button>
			</div>
			<Footer />
		</div>
	);
}

export default Profile;
