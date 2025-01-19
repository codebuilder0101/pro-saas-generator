# Trial Functionality in `Pricing` Component

## Overview

The `Pricing` component, located at `sassy/src/components/Pricing/index.tsx`, includes functionality for enabling a free trial period for users. This feature is controlled via a constant within the component, allowing developers to easily enable or disable the trial based on business requirements. When enabled, users are presented with a message indicating they have access to a free trial.

## Enabling/Disabling the Trial Feature

The trial feature is managed by the constant `HAS_FREE_TRIAL` inside the `Pricing` component. This flag is used to determine whether the free trial functionality is active or not. By default, this flag is set to `false`, but it can be changed to `true` to activate the trial.

### How to Enable the Trial:

1. Open the `Pricing` component at `sassy/src/components/Pricing/index.tsx`.
2. Locate the constant `HAS_FREE_TRIAL`.
3. Set the constant to `true` to enable the trial or leave it as `false` to disable it.

```js
const HAS_FREE_TRIAL = false; // Trial disabled
// OR
const HAS_FREE_TRIAL = true; // Trial enabled
```

### Example:

When `HAS_FREE_TRIAL` is set to `true`, a message informing the user about the free trial will be displayed. This message typically says:

```
You have a free trial for 7 days!
Try our service with no commitment.
```

This message is shown to the user inside a styled notification.

## Trial Feature Behavior

### 1. Display of Trial Information

If `HAS_FREE_TRIAL` is set to `true`, the component will display a message in a styled `div` element. This message informs users that they have a trial period available, which is currently set to 7 days.

```js
{HAS_FREE_TRIAL && (
    <div className="mt-4 bg-indigo-100 p-4 rounded-md text-gray-800">
        <p className="text-lg font-bold">
            You have a free trial for 7 days!
        </p>
        <p>Try our service with no commitment.</p>
    </div>
)}
```

### 2. Impact on Other Pricing Plans

The trial functionality operates alongside the available pricing plans. If a user opts for the trial, they will still be able to select any subscription plan afterward, either on a monthly or annual basis. The trial does not affect the ability to choose between these billing options.

### 3. Customization of Trial Duration

Currently, the trial duration is hardcoded to "7 days" in the component. If a different duration is required, developers can modify the displayed text in the component or pass the duration as a prop.

Example of the trial duration hardcoded:

```js
<p className="text-lg font-bold">
    You have a free trial for 7 days!
</p>
```

### 4. Checkout Flow

During the trial period, users are not charged. However, once the trial ends, users can proceed to the checkout flow to select a paid plan. The `Pricing` component handles the checkout process by invoking Stripe's API for processing payments.

- **Monthly and Annual Billing Options**: The toggle in the component allows users to choose between monthly or annual payment options, and the selected option will apply when they switch from the trial to the paid plan.
- **Handling Free Plan**: If a user selects the "free" plan, no checkout session is created, and no payment is processed.

## Conclusion

The free trial functionality in the `Pricing` component offers a flexible way to give users an initial, risk-free experience with your service. By enabling or disabling the trial through the `HAS_FREE_TRIAL` constant, developers can easily manage the availability of the trial. The trial period does not interfere with the checkout process, allowing users to seamlessly transition from the trial to a paid plan when they're ready.

### Customization

- Modify the `HAS_FREE_TRIAL` constant to enable or disable the trial.
- Change the duration of the trial in the displayed message.
- Integrate with other components like `Toggle` for monthly/annual billing options.

With these features, the trial period can be tailored to suit the specific needs of your application and business model.
