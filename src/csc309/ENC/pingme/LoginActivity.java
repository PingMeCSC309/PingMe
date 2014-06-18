package csc309.ENC.pingme;

import android.app.Activity;
import android.app.Fragment;
import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

public class LoginActivity extends Activity {
	
	/* Keys for Intent extras */
	public final static String SIGNUP_USRN = "csc309.ENC.pingme.SIGNUP_USRN";
	public final static String SIGNUP_PW = "csc309.ENC.pingme.SIGNUP_PW";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_login);

		if (savedInstanceState == null) {
			getFragmentManager().beginTransaction()
					.add(R.id.container, new LoginFragment()).commit();
		}
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}
	
	/**
	 * Navigate to Sign up activity
	 */
	public void signUp(View view) {
		Intent intent = new Intent(this, SignUpActivity.class);
		
		// Move contents of user name and password fields for sign up
		EditText usernameField = (EditText) findViewById(R.id.login_username);
		EditText passwordField = (EditText) findViewById(R.id.login_password);
		String username = usernameField.getText().toString();
		String password = passwordField.getText().toString();
		intent.putExtra(SIGNUP_USRN, username);
		intent.putExtra(SIGNUP_PW, password);
		
		startActivity(intent);
	}
	
	/**
	 * Navigate to forgotten password activity
	 */
	public void passwordForgot(View view) {
		Intent intent = new Intent(this, ForgottenPasswordActivity.class);
		startActivity(intent);
	}

	/**
	 * The login screen view
	 */
	public static class LoginFragment extends Fragment {

		@Override
		public View onCreateView(LayoutInflater inflater, ViewGroup container,
				Bundle savedInstanceState) {
			View rootView = inflater.inflate(R.layout.fragment_login,
					container, false);
			return rootView;
		}
	}
	
}
