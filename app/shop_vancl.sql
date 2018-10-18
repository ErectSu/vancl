/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : shop_vancl

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-10-18 11:15:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('14', '13035202856', '123456', null);
INSERT INTO `shop` VALUES ('15', '17671159492', '654321', null);
INSERT INTO `shop` VALUES ('16', '15587622915', '111111', null);
INSERT INTO `shop` VALUES ('25', '13035202858', '111111', null);
INSERT INTO `shop` VALUES ('27', '17683929412', '123456', null);
INSERT INTO `shop` VALUES ('28', '13434343434', '111111', null);
INSERT INTO `shop` VALUES ('29', '13434343435', '111111', null);
INSERT INTO `shop` VALUES ('30', '13453453453', '123123', null);
INSERT INTO `shop` VALUES ('32', '13456789099', '111111', null);
INSERT INTO `shop` VALUES ('33', '13455433456', '111111', null);
INSERT INTO `shop` VALUES ('34', '19999999999', '999999', null);
INSERT INTO `shop` VALUES ('35', '13035202850', '130352', null);
INSERT INTO `shop` VALUES ('36', '13035202857', '123456', '13035202857');
INSERT INTO `shop` VALUES ('37', '13035202859', '123456', '13035202859');
INSERT INTO `shop` VALUES ('38', '15656565656', '111111', null);
