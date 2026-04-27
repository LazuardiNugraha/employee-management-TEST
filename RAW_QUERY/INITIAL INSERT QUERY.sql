INSERT INTO public.employee ("id","nik","name","is_active","start_date","end_date","created_at","updated_at") 
VALUES 
(1,'11012','Budi',true,'2022-12-12','2029-12-12','2026-04-27','2026-04-27'),
(2,'11013','Jarot',true,'2021-09-01','2028-09-01','2026-04-27','2026-04-27')

INSERT INTO public.education ("id","employee_id","name","level","description","created_by","updated_by","created_at","updated_at") 
VALUES 
(1,1,'SMKN 7 Jakarta','SMA','Sekolah Menengah Atas','admin','admin','2022-12-12','2022-12-12'),
(2,2,'Universitas Negeri Jakarta','Strata 1','Sarjana','admin','admin','2022-12-12','2022-12-12')

INSERT INTO public.employee_family ("id","employee_id","name","identifier","job","place_of_birth","date_of_birth","religion","is_life","is_divorced","relation_status","created_by","updated_by","created_at","updated_at") 
VALUES 
(1,1,'Mami','32100594109960002','Ibu Rumah Tangga','Denpasar','1995-10-17','Islam','TRUE','FALSE','Istri','admin','admin','2022-12-12','2022-12-12'),
(2,1,'Clara','32100594109020004','Pelajar','Bangkalan','2018-10-17','Islam','TRUE','FALSE','Anak','admin','admin','2022-12-12','2022-12-12'),
(3,1,'Stephanie','32100594109020005','Pelajar','Bangkalan','2018-10-17','Islam','TRUE','FALSE','Anak','admin','admin','2022-12-12','2022-12-12')

INSERT INTO public.employee_profile ("id","employee_id","place_of_birth","date_of_birth","gender","is_married","prof_pict","created_by","updated_by","created_at","updated_at") 
VALUES 
(1,1,'Jakarta','1997-05-02','Laki-Laki','true',null,'admin','admin','2022-12-12','2022-12-12'),
(2,2,'Sukabumi','1996-05-02','Laki-Laki','false',null,'admin','admin','2022-12-12','2022-12-12')











