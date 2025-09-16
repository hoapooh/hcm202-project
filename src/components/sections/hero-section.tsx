import React from "react";
import { ThreeDMarquee } from "../ui/3d-marquee";
import { ChevronsDown, Mouse } from "lucide-react";

const HeroSection = () => {
	const images = [
		"https://special.nhandan.vn/tinh_than_Ho_Chi_Minh_tai_san_tinh_than_vo_gia/assets/UIthBiau6f/bai-dang-instagram-chao-mung-quoc-khanh-viet-nam-toi-gian-do-trang-1-2560x1440.jpg",
		"https://hungvuongtech.edu.vn/wp-content/uploads/2022/12/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin-tu-tuong-ho-chi-minh-trong-dieu-kien-moi.jpg",
		"https://hctd.kiengiang.gov.vn/PublishingImages/TinTuc/TU-KG/12-6-22%20hochiminh_ssec.jpg",
		"https://cly.1cdn.vn/2024/01/30/mau-muc-1-.jpg",
		"https://cdn.tapchitoaan.vn/uploads/2019/05/tu-tuong-hcm.jpg",
		"https://noichinh.vn/dataimages/202305/original/images729925_CT_HCM.jpg",
		"https://filehcma3.hcma.vn/Image?path=hv3.tbt/2025/5/17//Picture1.png&w=1200&mode=none",
		"https://media.baotintuc.vn/Upload/QKrAM3u3JmfSk084HTqfEg/files/2025/05/nha-nuoc-phap-quyen/tutuong-HCM.jpg",
		"https://doanthanhnien.vn/Content/uploads/images/133020729245993260_1dacv.jpg",
		"https://a.tcnn.vn//Images/images/291939658_624745115656109_4712881979695930136_n.jpg",
		"https://cdn.baohatinh.vn/images/93923d58fc3bb0f0af3e4594b0c37b71cffb15dd2f9b4eeae213ebdeab9c1393dbf8c38f5256c9d24542355c1b6086fb/77d5063829t2915l9.jpg",
		"https://media.vov.vn/sites/default/files/styles/large/public/2020-08/dsc_6571.jpg",
		"https://lhu.edu.vn/Data/News/201/images/BacHo/chiase360_com_avatar_bac_ho_13_1gkhd.jpg",
		"https://images.unsplash.com/photo-1710141968143-7ea1f6d89025?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://cdn2.tuoitre.vn/thumb_w/1200/471584752817336320/2025/6/1/dscf0237-17487403157411873397600-84-0-1424-2560-crop-1748740757015162405933.jpg",
		"https://special.nhandan.vn/tinh_than_Ho_Chi_Minh_tai_san_tinh_than_vo_gia/assets/UIthBiau6f/bai-dang-instagram-chao-mung-quoc-khanh-viet-nam-toi-gian-do-trang-1-2560x1440.jpg",
		"https://images.unsplash.com/photo-1710141968143-7ea1f6d89025?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		"https://lhu.edu.vn/Data/News/201/images/BacHo/chiase360_com_avatar_bac_ho_13_1gkhd.jpg",
		"https://media.vov.vn/sites/default/files/styles/large/public/2020-08/dsc_6571.jpg",
		"https://cdn.baohatinh.vn/images/93923d58fc3bb0f0af3e4594b0c37b71cffb15dd2f9b4eeae213ebdeab9c1393dbf8c38f5256c9d24542355c1b6086fb/77d5063829t2915l9.jpg",
		"https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/02/03/co-dang.jpg",
		"https://doanthanhnien.vn/Content/uploads/images/133020729245993260_1dacv.jpg",
		"https://media.baotintuc.vn/Upload/QKrAM3u3JmfSk084HTqfEg/files/2025/05/nha-nuoc-phap-quyen/tutuong-HCM.jpg",
		"https://filehcma3.hcma.vn/Image?path=hv3.tbt/2025/5/17//Picture1.png&w=1200&mode=none",
		"https://noichinh.vn/dataimages/202305/original/images729925_CT_HCM.jpg",
		"https://cdn.tapchitoaan.vn/uploads/2019/05/tu-tuong-hcm.jpg",
		"https://cly.1cdn.vn/2024/01/30/mau-muc-1-.jpg",
		"https://hctd.kiengiang.gov.vn/PublishingImages/TinTuc/TU-KG/12-6-22%20hochiminh_ssec.jpg",
		"https://hungvuongtech.edu.vn/wp-content/uploads/2022/12/bo-sung-phat-trien-hoan-thien-chu-nghia-mac-lenin-tu-tuong-ho-chi-minh-trong-dieu-kien-moi.jpg",
		"https://special.nhandan.vn/tinh_than_Ho_Chi_Minh_tai_san_tinh_than_vo_gia/assets/UIthBiau6f/bai-dang-instagram-chao-mung-quoc-khanh-viet-nam-toi-gian-do-trang-1-2560x1440.jpg",
		"https://cdn.thuvienphapluat.vn/uploads/tintuc/2025/02/03/co-dang.jpg",
		"https://doanthanhnien.vn/Content/uploads/images/133020729245993260_1dacv.jpg",
		"https://media.baotintuc.vn/Upload/QKrAM3u3JmfSk084HTqfEg/files/2025/05/nha-nuoc-phap-quyen/tutuong-HCM.jpg",
		"https://filehcma3.hcma.vn/Image?path=hv3.tbt/2025/5/17//Picture1.png&w=1200&mode=none",
	];

	return (
		<div className="w-full h-full relative snap-start">
			<ThreeDMarquee images={images} />
			<div className="absolute inset-0 bg-black opacity-70 pointer-events-none flex items-center justify-center flex-col gap-y-4">
				<h1 className="text-white text-8xl font-bold text-center w-full font-bangers">
					<span className="text-red-500">CHUNG</span> <span className="text-yellow-400">TAY</span> -{" "}
					<span className="text-red-500">ĐỒNG</span> <span className="text-yellow-400">HÀNH</span>
				</h1>
				<p className="text-white text-3xl text-center w-full font-medium font-bangers">
					Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì
					nhân dân
				</p>
			</div>
			<Mouse className="absolute bottom-16 size-12 animate-bounce text-white left-1/2 transform -translate-x-1/2" />
			<ChevronsDown className="absolute bottom-4 size-12 animate-bounce text-white left-1/2 transform -translate-x-1/2" />
		</div>
	);
};

export default HeroSection;
