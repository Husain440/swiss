-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 09, 2022 at 01:45 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `glasses_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` bigint(128) NOT NULL,
  `category_name` varchar(64) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `category_name`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'men', 1, 0, '2022-09-05 07:15:31', '2022-09-05 07:15:31'),
(2, 'female', 1, 0, '2022-09-05 07:15:31', '2022-09-05 07:15:31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_color`
--

CREATE TABLE `tbl_color` (
  `id` bigint(128) NOT NULL,
  `product_id` bigint(128) NOT NULL,
  `name` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_color`
--

INSERT INTO `tbl_color` (`id`, `product_id`, `name`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 'red', 1, 0, '2022-09-05 11:37:17', '2022-09-05 11:37:17'),
(2, 1, 'blue', 1, 0, '2022-09-05 11:37:17', '2022-09-05 11:37:17'),
(3, 1, 'green', 1, 0, '2022-09-05 11:37:17', '2022-09-05 11:37:17'),
(4, 2, 'red', 1, 0, '2022-09-05 11:37:17', '2022-09-05 11:37:17'),
(5, 2, 'blue', 1, 0, '2022-09-05 11:37:17', '2022-09-05 11:37:17');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_image`
--

CREATE TABLE `tbl_image` (
  `id` bigint(128) NOT NULL,
  `product_id` bigint(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_image`
--

INSERT INTO `tbl_image` (`id`, `product_id`, `name`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 'image1.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(2, 1, 'image2.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(3, 3, 'image3.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(4, 4, 'image4.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(5, 5, 'image5.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(6, 6, 'image6.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(7, 6, 'image7.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49'),
(8, 8, 'image8.jpg', 1, 0, '2022-09-05 08:58:49', '2022-09-05 08:58:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` bigint(128) NOT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` bigint(128) NOT NULL,
  `name` varchar(128) NOT NULL,
  `avg_rating` float(2,1) NOT NULL,
  `frame_size` varchar(128) NOT NULL,
  `frame_width` text NOT NULL,
  `discription` varchar(128) NOT NULL,
  `price` varchar(64) NOT NULL,
  `discount_type` enum('Percentage','flat') NOT NULL,
  `discount` varchar(64) NOT NULL,
  `payable_amount` varchar(64) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `category_id`, `sub_category_id`, `name`, `avg_rating`, `frame_size`, `frame_width`, `discription`, `price`, `discount_type`, `discount`, `payable_amount`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'vincent polarized glass', 3.1, 'small', '111mm', 'vincent polarized glass', '1250', 'flat', '50', '1200', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(2, 2, 1, 'fossil', 0.0, 'medium', '125mm', 'fossil', '1500', 'flat', '100', '1400', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(3, 1, 3, 'john jacobs', 0.0, 'large', '254mm', 'john jacobs', '2800', 'flat', '200', '2600', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(4, 2, 1, 'lenskart blue', 0.0, 'extra large', '254mm', 'lenskart blue', '2500', 'Percentage', '20', '2000', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(5, 2, 5, 'lenskart air', 0.0, 'small', '254mm', 'lenskart air', '5000', 'flat', '1000', '4000', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(6, 1, 1, 'lenscart small compute glass', 0.0, 'medium', '254mm', 'lenscart small compute glass', '8500', 'Percentage', '25', '6900', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27'),
(7, 2, 7, 'fossil', 0.0, 'large', '254mm', 'fossil', '8000', 'flat', '2000', '6000', 1, 0, '2022-09-05 08:00:27', '2022-09-05 08:00:27');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_rating`
--

CREATE TABLE `tbl_rating` (
  `id` bigint(128) NOT NULL,
  `user_id` bigint(128) NOT NULL,
  `product_id` bigint(128) NOT NULL,
  `rating` float(2,1) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_rating`
--

INSERT INTO `tbl_rating` (`id`, `user_id`, `product_id`, `rating`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 2.4, 1, 0, '2022-09-05 09:42:19', '2022-09-05 09:42:19'),
(2, 1, 1, 2.5, 1, 0, '2022-09-05 09:42:19', '2022-09-05 09:42:19'),
(4, 1, 1, 4.5, 1, 0, '2022-09-08 06:28:47', '2022-09-08 06:28:47');

--
-- Triggers `tbl_rating`
--
DELIMITER $$
CREATE TRIGGER `avg_rating` AFTER INSERT ON `tbl_rating` FOR EACH ROW UPDATE tbl_product set avg_rating=(select avg(rating)from tbl_rating where tbl_rating.product_id=tbl_product.id)where id=new.product_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subcategory`
--

CREATE TABLE `tbl_subcategory` (
  `id` bigint(128) NOT NULL,
  `category_id` bigint(128) NOT NULL,
  `sub_categoryname` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_subcategory`
--

INSERT INTO `tbl_subcategory` (`id`, `category_id`, `sub_categoryname`, `image`, `is_active`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 1, 'eye glasses', 'eyeglasses.jpg', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(2, 2, 'sun glasses', 'sunglasses.png', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(3, 2, 'rectangle', 'rectangle.jpg', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(4, 1, 'aviator', 'aviator.png', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(5, 2, 'rimmed', 'rimmed.jpg', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(6, 2, 'rimless', 'rimless.png', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(7, 1, 'hexagone', 'hexagone.jpg', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23'),
(8, 1, 'computer glasses', 'computerglasses.jpg', 1, 0, '2022-09-05 07:30:23', '2022-09-05 07:30:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  `phone_no` varchar(64) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `is_online` tinyint(1) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `last_login` datetime NOT NULL,
  `forgotpassword_token` varchar(128) DEFAULT NULL,
  `forgotpassword_date` datetime DEFAULT NULL,
  `latitude` varchar(64) NOT NULL,
  `longitude` varchar(64) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `email`, `password`, `phone_no`, `is_active`, `is_online`, `is_deleted`, `last_login`, `forgotpassword_token`, `forgotpassword_date`, `latitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'sonichintan83@gmail.com', 'jwpSXZCKdBPzEiq0+MF5Nw==', '', 1, 1, 0, '2022-09-05 11:20:59', 'GLASSESAPI1', '2022-09-06 13:40:06', '', '', '2022-09-05 03:56:08', '2022-09-06 08:10:06'),
(2, '', '1ZHMctsWA+Kga0wuh/3PFA==', '9106929023', 1, 0, 0, '2022-09-06 15:27:35', NULL, NULL, '', '', '2022-09-05 04:18:51', '2022-09-06 10:10:08');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_device`
--

CREATE TABLE `tbl_user_device` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `token` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `device_type` char(1) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `device_token` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `uuid` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `os_version` varchar(8) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `device_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `model_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ip` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `insertdate` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatetime` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_device`
--

INSERT INTO `tbl_user_device` (`id`, `user_id`, `token`, `device_type`, `device_token`, `uuid`, `os_version`, `device_name`, `model_name`, `ip`, `is_active`, `is_deleted`, `insertdate`, `updatetime`) VALUES
(1, 2, '', 'A', '', 'dfbouihcvvxwhjssas', '6.6.32', 'samsung', 'galaxy7', '', 1, 0, '2022-09-05 04:18:51', '2022-09-06 10:48:33'),
(3, 1, 'o1u4nq8hlulid73e1pqzmv5uudjpulngcridw3ypdx77oae45mx493ix1klg5jle', 'A', 'asdfghjksasasldsadsd', 'dfbouihcvvxwhjssas', '6.6.32', 'samsung', 'galaxy7', '', 1, 0, '2022-09-05 05:50:08', '2022-09-05 05:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_verification`
--

CREATE TABLE `tbl_user_verification` (
  `id` bigint(128) NOT NULL,
  `phone_no` varchar(16) NOT NULL,
  `email` varchar(128) NOT NULL,
  `otp` varchar(8) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_verification`
--

INSERT INTO `tbl_user_verification` (`id`, `phone_no`, `email`, `otp`, `created_at`, `updated_at`) VALUES
(7, '', 'rahulmeenaglc847@gmail.com', '4586', '2022-09-08 05:36:46', '2022-09-08 05:36:46'),
(9, '', 'showtimewizard49@gmail.com', '2770', '2022-09-08 05:48:27', '2022-09-08 05:48:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_color`
--
ALTER TABLE `tbl_color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_image`
--
ALTER TABLE `tbl_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_rating`
--
ALTER TABLE `tbl_rating`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user_device`
--
ALTER TABLE `tbl_user_device`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user_verification`
--
ALTER TABLE `tbl_user_verification`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_color`
--
ALTER TABLE `tbl_color`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_image`
--
ALTER TABLE `tbl_image`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_rating`
--
ALTER TABLE `tbl_rating`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_subcategory`
--
ALTER TABLE `tbl_subcategory`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user_device`
--
ALTER TABLE `tbl_user_device`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user_verification`
--
ALTER TABLE `tbl_user_verification`
  MODIFY `id` bigint(128) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
