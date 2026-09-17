def analyze_digits_and_case(user_input):
    
    cleaned=user_input.strip()

    if cleaned=="":
        return (0,0)

    uppercase_count=0
    digit_sum=0

    for ch in cleaned:

        if ch.isupper():
            uppercase_count+=1

        elif ch.isdigit():
            digit_sum+=int(ch)

    if uppercase_count==0 and digit_sum==0:
        return (0,0)

    return (uppercase_count,digit_sum)
