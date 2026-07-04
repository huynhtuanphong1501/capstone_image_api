CREATE TABLE nguoi_dung(
	nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL UNIQUE,
	mat_khau VARCHAR(255) not NULL,
	ho_ten VARCHAR(255) not NULL,
	tuoi INT,
	anh_dai_dien VARCHAR(255)
)

CREATE TABLE hinh_anh(
	hinh_id INT PRIMARY KEY AUTO_INCREMENT,
	ten_hinh VARCHAR(255) NOT NULL,
	duong_dan VARCHAR(500) NOT NULL,
	mo_ta VARCHAR(255),
	nguoi_dung_id INT NOT NULL,
	FOREIGN KEY(nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id)
)

CREATE TABLE binh_luan(
	binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
	nguoi_dung_id INT NOT NULL,
	hinh_id INT NOT NULL,
	ngay_binh_luan DATE,
	noi_dung VARCHAR(255),
	
	FOREIGN KEY(nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
	FOREIGN KEY(hinh_id) REFERENCES hinh_anh(hinh_id)
)

CREATE TABLE luu_anh (
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_luu DATE,

    PRIMARY KEY (nguoi_dung_id, hinh_id),

    FOREIGN KEY (nguoi_dung_id)
        REFERENCES nguoi_dung(nguoi_dung_id),

    FOREIGN KEY (hinh_id)
        REFERENCES hinh_anh(hinh_id)
)