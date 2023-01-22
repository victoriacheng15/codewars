def get_grade(s1: int, s2: int, s3: int) -> str:
    avg = sum([s1, s2, s3]) / 3
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'