exports.seed = async function (knex) {
    await knex('app_control').del()
    await knex('ref_constant').del()
  
    await appControllTable(knex)
    await refConstantsTable(knex)

  };
  
  async function appControllTable(knex) {
    await knex("app_control").insert([
      {
        is_prod: false,
        in_maintenance: false,
        ios_version: "0.0.1",
        android_version:"0.0.1",
        min_android_version:"0.0.1",
        min_ios_version:'0.0.1'
      },
    ]);
  }

  const userConstants = [
    {
      ref_value: 'USER_ACTIVE',
      ref_value_code: 'USER_',
      ref_label: "user on active state",
      ref_table: "user_info",
      ref_column: "status",
    },
    {
      ref_value: 'USER_IN_ACTIVE',
      ref_value_code: 'USER_',
      ref_label: "user on Inactive state",
      ref_table: "user_info",
      ref_column: "status",
    },
    {
      ref_value: 'USER_APPR_PENDING',
      ref_value_code: 'USER_',
      ref_label: "user approval is pending",
      ref_table: "user_info",
      ref_column: "status",
    },
    {
      ref_value: 'USER_APPR_REJECTED',
      ref_value_code: 'USER_',
      ref_label: "user approval is rejected",
      ref_table: "user_info",
      ref_column: "status",
    },
    {
      ref_value: 'USER_DEACTIVE',
      ref_value_code: 'USER_',
      ref_label: "user is deactivated",
      ref_table: "user_info",
      ref_column: "status",
    },
  ]

  const onboardingTypeConstants = [
    {
      ref_value: 'EMAIL_OTP',
      ref_value_code: 'ONBOARD_',
      ref_label: "Verify via email",
      ref_table: "onboard_init",
      ref_column: "type",
    },
    {
      ref_value: 'SMS_OTP',
      ref_value_code: 'ONBOARD_',
      ref_label: "Verify via SMS mobile",
      ref_table: "onboard_init",
      ref_column: "type",
    },
    {
      ref_value: 'GOOGLE_OAUTH',
      ref_value_code: 'ONBOARD_',
      ref_label: "Verify via Google auth",
      ref_table: "onboard_init",
      ref_column: "type"
    },
  ]

  async function refConstantsTable(knex) {
    await knex("ref_constant").insert(userConstants);
    await knex("ref_constant").insert(onboardingTypeConstants);

  }