import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
