# Sassy Integration with Datadog: Real User Monitoring (RUM)

To enable Real User Monitoring (RUM) for Sassy, you need to set up your environment with two essential keys and then configure your Datadog dashboard for monitoring.

## 1. Set up Datadog Keys in `.env`

The integration requires two environment variables to connect Sassy to Datadog's RUM service. These keys should be added to your `.env` file in your project:

```
NEXT_PUBLIC_DATADOG_APPLICATION_ID=<your-application-id>
NEXT_PUBLIC_DATADOG_CLIENT_TOKEN=<your-client-token>
```

- **`NEXT_PUBLIC_DATADOG_APPLICATION_ID`**: This is the unique application ID provided by Datadog for your RUM integration.
- **`NEXT_PUBLIC_DATADOG_CLIENT_TOKEN`**: This is the client token provided by Datadog to authenticate the RUM events.

## 2. Configure Datadog for RUM

Once the keys are set, the next step is to configure the Datadog RUM on your Datadog dashboard:

1. Go to your **Datadog Dashboard**.
2. Navigate to **Digital Experience** in the Datadog menu.
3. Under **Digital Experience**, select **Real User Monitoring** (RUM).
4. Here, you can monitor all the user interactions, page views, and error tracking from your Sassy app.

## 3. Troubleshooting

If the RUM data is not appearing or working correctly, follow these troubleshooting steps:

### 3.1. Verify Environment Variables
Ensure that the **`NEXT_PUBLIC_DATADOG_APPLICATION_ID`** and **`NEXT_PUBLIC_DATADOG_CLIENT_TOKEN`** environment variables are correctly set. Double-check that the `.env` file is correctly loaded in your application, and restart the server if necessary.

### 3.2. Check Browser Console
Open the browser developer tools and check the console for any errors related to Datadog RUM. The Datadog library should be properly initialized, and there should be no issues with loading the RUM events. You can also verify if there are network requests to Datadog's RUM endpoints.

### 3.3. Datadog Dashboard
Once you have successfully set up RUM, check the **Real User Monitoring** section in your Datadog dashboard to ensure that the data is coming through. You should see:

- **Session Data**: User interactions such as clicks, page loads, and scrolls.
- **Errors**: Any frontend errors encountered by users (JavaScript errors, etc.).
- **Page Performance**: Metrics related to how long the pages take to load.

If the data does not show up immediately, it may take a few minutes for Datadog to process the RUM data.

### 3.4. Validate RUM Initialization
Ensure that the RUM configuration is being initialized properly in the **client-side** of your application, as RUM needs to track user interactions in the browser.

## 4. Final Notes

Once everything is set up correctly, you should be able to see RUM data flowing into Datadog, providing insights into your users' interactions with your Sassy app. Use Datadog’s analytics and troubleshooting tools to monitor performance, detect issues, and improve the user experience.

For more information on RUM and Datadog setup, check the [official Datadog documentation](https://docs.datadoghq.com/real_user_monitoring/).
