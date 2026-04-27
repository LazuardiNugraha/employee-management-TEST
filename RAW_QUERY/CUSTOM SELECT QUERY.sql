SELECT 
  emp.id, 
  emp.nik,
  emp.name,
  emp.is_active,
  emp_prf.gender,
  
  CASE
  	WHEN emp_prf.date_of_birth IS NOT NULL
	THEN DATE_PART('year', AGE(NOW(), emp_prf.date_of_birth))::int || ' Years Old'
  END AS age,
  
  ed.name AS school_name,
  ed.level,
  
  COALESCE(fm.family_summary, '-') AS family_data
FROM public.employee emp
JOIN public.employee_profile emp_prf 
  ON emp.id = emp_prf.employee_id

JOIN public.education ed 
  ON emp.id = ed.employee_id
  
LEFT JOIN (
	SELECT 
		employee_id,
	
		CONCAT(
			COUNT(*) FILTER (WHERE relation_status = 'Istri'),
			' Istri & ',
			COUNT(*) FILTER (WHERE relation_status = 'Anak'),
			' Anak'
		) AS family_summary
	FROM public.employee_family
	GROUP BY employee_id
) fm ON emp.id = fm.employee_id