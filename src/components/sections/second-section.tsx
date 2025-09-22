import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Boxes } from "../ui/background-boxes";
import { Spotlight } from "../ui/spotlight";
import { cn } from "@/lib/utils";

const content = [
	{
		title: "Cuối thế kỷ XIX – đầu XX,",
		description:
			"Xã hội Việt Nam tồn tại đồng thời mâu thuẫn dân tộc giữa nhân dân với thực dân Pháp xâm lược và mâu thuẫn giai cấp giữa công nhân, nông dân với địa chủ phong kiến và tư sản mại bản.",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<img
					src="https://danviet.ex-cdn.com/files/f1/upload/2-2019/images/2019-05-05/Sau-The-chien-I-bon-thuc-dan-cang-tro-nen-manh-dong-boc-lot-nang-ne-nhan-dan-ta-90-1557017975-width660height416.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="Sau Thế chiến I, thực dân Pháp đã bóc lột nhân dân Việt Nam như thế nào?"
				/>
			</div>
		),
	},
	{
		title: "Các phong trào yêu nước",
		description:
			"Các phong trào yêu nước dù phát triển mạnh mẽ với nhiều cuộc khởi nghĩa như của Phan Đình Phùng, Hoàng Hoa Thám, Phan Bội Châu, Phan Châu Trinh… nhưng do thiếu đường lối khoa học và tổ chức lãnh đạo thống nhất nên đều thất bại.",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<img
					src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/6/2/1199983/8-VHTT-1012454-01.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="Các phong trào yêu nước"
				/>
			</div>
		),
	},
	{
		title: "Đường lối đúng đắn",
		description:
			"Trong bối cảnh đó, dân tộc Việt Nam cần có một lực lượng chính trị tiên phong, có đường lối đúng đắn để tập hợp và lãnh đạo toàn dân giành độc lập, tiến lên con đường xã hội chủ nghĩa.",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<img
					src="https://m.baotuyenquang.com.vn/media/images/2021/07/img_20210709085617.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="Các phong trào yêu nước"
				/>
			</div>
		),
	},
	{
		title: "1930 – Sự ra đời của Đảng Cộng sản Việt Nam",
		description:
			"Sự kiện này là kết quả tất yếu của sự kết hợp biện chứng giữa chủ nghĩa Mác – Lênin, phong trào công nhân và phong trào yêu nước, đồng thời thể hiện tư duy sáng tạo của Hồ Chí Minh về vai trò gắn bó mật thiết của Đảng với nhân dân, trung thành với lợi ích dân tộc.",
		content: (
			<div className="flex h-full w-full items-center justify-center text-white">
				<img
					src="https://lhu.edu.vn/Data/News/201/images/thanh_lap_dang/co_dang_bac_jpg.jpg"
					width={300}
					height={300}
					className="h-full w-full object-cover"
					alt="Các phong trào yêu nước"
				/>
			</div>
		),
	},
];
export function SecondSection() {
	return (
		<div className="w-full h-full flex items-center py-4 relative snap-start">
			<div
				className={cn(
					"pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
					"[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
				)}
			/>

			{/* https://doanthanhnien.vn/Content/uploads/images/133045716834111411_vna_potal_ky_niem_110_nam_ngay_sinh_dong_chi_vo_chi_cong_nguoi_chien_si_cach_mang_tai_tri_kien_cuong_nha_lanh_dao_xuat_sac_cua_dang_va_cach_mang_viet__6264134.jpg */}
			<img
				src="https://nhandan.vn/special/nguyenaiquoc_thanhlapdang/assets/h2Sk4FEocM/nguyenaiquocoquangchau-2560x1544.jpg"
				alt="background image"
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div className="absolute inset-0 w-full h-full bg-black/30" />
			<StickyScroll content={content} />
		</div>
	);
}
