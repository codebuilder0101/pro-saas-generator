export default function PasswordStrengthIndicator({ password }: { password: string }) {
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    
    if (password.length >= 6) strength += 1;
    if (password.length >= 10) strength += 1;
    
    if (/[0-9]/.test(password)) strength += 1;
    
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    
    if (/[A-Z]/.test(password)) strength += 1;
    
    if (/[a-z]/.test(password)) strength += 1;
    
    return strength;
  };

  const getStrengthLabel = (strength: number) => {
    switch (strength) {
      case 1:
      case 2:
        return "Weak";
      case 3:
      case 4:
        return "Medium";
      case 5:
        return "Strong";
      default:
        return "Weak";
    }
  };

  const strength = getPasswordStrength(password);
  const strengthLabel = getStrengthLabel(strength);

  return (
    <div>
      <div className="mt-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Password Strength:</span>
          <span className={password ? `font-semibold ${strength >= 3 ? 'text-green-500' : 'text-red-500'}` : ''}>
            {strengthLabel}
          </span>
        </div>
        <div className="h-1 mt-1 rounded-full bg-gray-300">
          <div
            className={`h-full rounded-full ${strength === 1
              ? 'bg-red-500'
              : strength === 2
              ? 'bg-yellow-500'
              : 'bg-green-500'
            }`}
            style={{
              width: `${(strength / 5) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
