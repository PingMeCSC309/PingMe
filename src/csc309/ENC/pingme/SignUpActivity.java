package csc309.ENC.pingme;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.NavUtils;
import android.view.MenuItem;
import android.widget.EditText;

public class SignUpActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_sign_up);
		// Show the Up button in the action bar.
		setupActionBar();
		
		// Get already typed user info and insert in fields
		Intent intent = getIntent();
		String username = intent.getStringExtra(LoginActivity.SIGNUP_USRN);
		String pw = intent.getStringExtra(LoginActivity.SIGNUP_PW);
		
		EditText userField = (EditText) findViewById(R.id.signup_username);
		EditText pwField = (EditText) findViewById(R.id.signup_password);
		userField.setText(username);
		pwField.setText(pw);			
	}

	/**
	 * Set up the {@link android.app.ActionBar}.
	 */
	private void setupActionBar() {

		getActionBar().setDisplayHomeAsUpEnabled(true);

	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case android.R.id.home:
			// This ID represents the Home or Up button. In the case of this
			// activity, the Up button is shown. Use NavUtils to allow users
			// to navigate up one level in the application structure. For
			// more details, see the Navigation pattern on Android Design:
			//
			// http://developer.android.com/design/patterns/navigation.html#up-vs-back
			//
			NavUtils.navigateUpFromSameTask(this);
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

}
