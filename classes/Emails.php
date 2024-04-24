<?php
namespace MooWoodle;
class Emails {
	public function __construct() {
		add_action( 'moowoodle_after_enrol_moodle_user', [ &$this, 'send_moodle_enrollment_confirmation' ] );
		add_filter( 'woocommerce_email_classes', [ &$this, 'moowoodle_emails' ] );
	}

	/**
	 * MooWoodle emails
	 * @param array $emails
	 * @return array
	 */
	public function moowoodle_emails( $emails ) {
		$emails[ 'Emails_New_Enrollment' ] = new Emails\Emails_New_Enrollment();
		return $emails;
	}

	/**
	 * Send email
	 * @param string $email_key (default: null)
	 * @param array $email_data (default: array)
	 * @return void
	 */
	public function send_email( $email_key = '', $email_data = [] ) {
		$emails = WC()->mailer()->get_emails();
		if ( empty( $email_key ) || !array_key_exists( $email_key, $emails ) ) {
			return;
		}
		$emails[ $email_key ]->trigger( $email_data );
	}

	/**
	 * Send confirmation for enrollment in moodle course
	 * @param array $enrolments
	 * @return void
	 */
	public function send_moodle_enrollment_confirmation( $enrolments ) {
		$enrollment_datas = [];
		$user_id 						= MooWoodle()->Enrollment->wc_order->get_user_id();
		$user 							= get_userdata($user_id);
		$enrollment_datas['email'] 		= ($user == false) ? '' : $user->user_email;
		$enrollment_datas['enrolments'] = $enrolments;
		
		$this->send_email('Emails_New_Enrollment', $enrollment_datas);
	}
}
