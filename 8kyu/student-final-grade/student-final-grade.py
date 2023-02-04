def final_grade(exam, projects):
    if exam > 90 or projects > 10: return 100
    if exam > 75 and projects >= 5: return 90
    if exam > 50 and projects >= 2: return 75
    return 0


print(final_grade(100, 12))
print(final_grade(85, 5))