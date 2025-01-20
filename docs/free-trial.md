# Trial Functionality in `Pricing` Component

## Overview

The `Pricing` component, located at `sassy/src/components/Pricing/index.tsx`, includes functionality for enabling a free trial period for users. This feature is now controlled via a constant in `sassy/src/constants/FreeTrial.ts`, allowing developers to easily enable or disable the trial and set the trial duration if desired.

## Enabling/Disabling the Trial Feature

The trial feature is managed by the constant `HAS_FREE_TRIAL` in `sassy/src/constants/FreeTrial.ts`. This flag determines whether the free trial functionality is active. By default, this flag is set to `false`, but it can be modified as needed.

### How to Enable the Trial:

1. Open the `FreeTrial.ts` file at `sassy/src/constants/FreeTrial.ts`.
2. Locate the constant `HAS_FREE_TRIAL`.
3. Set the constant to `true` to enable the trial or leave it as `false` to disable it.

```js
// sassy/src/constants/FreeTrial.ts
export const HAS_FREE_TRIAL = false; // Trial disabled
// OR
export const HAS_FREE_TRIAL = '7d'; // Trial enabled for 7 days
```

### Example:

When `HAS_FREE_TRIAL` is set to `'7d'`, a message informing the user about the free trial will be displayed. This message typically says:

```
You have a free trial for 7 days!
Try our service with no commitment.
```

This message is shown to the user inside a styled notification.

## Trial Feature Behavior

### 1. Display of Trial Information

If `HAS_FREE_TRIAL` is set to `'7d'`, the component will display a message informing users that they have a trial period available for 7 days.

```js
// sassy/src/components/Pricing/index.tsx
import { HAS_FREE_TRIAL } from '../../constants/FreeTrial';

{HAS_FREE_TRIAL && (
    <div className="mt-4 bg-indigo-100 p-4 rounded-md text-gray-800">
        <p className="text-lg font-bold">
            You have a free trial for {HAS_FREE_TRIAL}!
        </p>
        <p>Try our service with no commitment.</p>
    </div>
)}
```

### 2. Impact on Other Pricing Plans

The trial functionality operates alongside the available pricing plans. If a user opts for the trial, they will still be able to select any subscription plan afterward, either on a monthly or annual basis. The trial does not affect the ability to choose between these billing options.

### 3. Customization of Trial Duration

You can customize the duration of the trial by setting the `HAS_FREE_TRIAL` variable to any string value representing the duration (e.g., `'7d'` for 7 days, `'14d'` for 14 days, etc.).

Example:

```js
// sassy/src/constants/FreeTrial.ts
export const HAS_FREE_TRIAL = '14d'; // Trial enabled for 14 days
```

### 4. Checkout Flow

During the trial period, users are not charged. However, once the trial ends, users can proceed to the checkout flow to select a paid plan. The `Pricing` component handles the checkout process by invoking Stripe's API for processing payments.

- **Monthly and Annual Billing Options**: The toggle in the component allows users to choose between monthly or annual payment options, and the selected option will apply when they switch from the trial to the paid plan.
- **Handling Free Plan**: If a user selects the "free" plan, no checkout session is created, and no payment is processed.

## Conclusion

The free trial functionality in the `Pricing` component offers a flexible way to give users an initial, risk-free experience with your service. By enabling or disabling the trial through the `HAS_FREE_TRIAL` constant in `FreeTrial.ts`, developers can easily manage the availability of the trial. The trial period does not interfere with the checkout process, allowing users to seamlessly transition from the trial to a paid plan when they're ready.

### Customization

- Modify the `HAS_FREE_TRIAL` constant in `FreeTrial.ts` to enable or disable the trial.
- Set the trial duration by changing the value of `HAS_FREE_TRIAL` (e.g., `'7d'` for 7 days).
- Integrate with other components like `Toggle` for monthly/annual billing options.

