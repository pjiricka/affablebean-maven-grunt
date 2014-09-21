-- Copyright (c) 2010, Oracle and/or its affiliates. All rights reserved.
--
-- You may not modify, use, reproduce, or distribute this software
-- except in compliance with the terms of the license at:
-- http://developer.sun.com/berkeley_license.html
--
-- author: tgiunipero
--

--
-- Database: `affablebean`
--

-- --------------------------------------------------------

--
-- Sample data for table `category`
--
INSERT INTO category (name) VALUES ('dairy'),('meats'),('bakery'),('fruit & veg');


--
-- Sample data for table `product`
--
--INSERT INTO product (name, price, description, category_id) VALUES ('milk', 1.70, 'semi skimmed (1L)', 1);
--INSERT INTO product (name, price, description, category_id) VALUES ('cheese', 2.39, 'mild cheddar (330g)', 1);
--INSERT INTO product (name, price, description, category_id) VALUES ('butter', 1.09, 'unsalted (250g)', 1);
--INSERT INTO product (name, price, description, category_id) VALUES ('free range eggs', 1.76, 'medium-sized (6 eggs)', 1);
INSERT INTO product (name, price, category_id) VALUES ('milk', 1.70, 1);
INSERT INTO product (name, price, category_id) VALUES ('cheese', 2.39, 1);
INSERT INTO product (name, price, category_id) VALUES ('butter', 1.09, 1);
INSERT INTO product (name, price, category_id) VALUES ('free range eggs', 1.76, 1);

INSERT INTO product (name, price, category_id) VALUES ('organic meat patties', 2.29, 2);
INSERT INTO product (name, price, category_id) VALUES ('parma ham', 3.49, 2);
INSERT INTO product (name, price, category_id) VALUES ('chicken leg', 2.59, 2);
INSERT INTO product (name, price, category_id) VALUES ('sausages', 3.55, 2);

INSERT INTO product (name, price, category_id) VALUES ('sunflower seed loaf', 1.89, 3);
INSERT INTO product (name, price, category_id) VALUES ('sesame seed bagel', 1.19, 3);
INSERT INTO product (name, price, category_id) VALUES ('pumpkin seed bun', 1.15, 3);
INSERT INTO product (name, price, category_id) VALUES ('chocolate cookies', 2.39, 3);

INSERT INTO product (name, price, category_id) VALUES ('corn on the cob', 1.59, 4);
INSERT INTO product (name, price, category_id) VALUES ('red currants', 2.49, 4);
INSERT INTO product (name, price, category_id) VALUES ('broccoli', 1.29, 4);
INSERT INTO product (name, price, category_id) VALUES ('seedless watermelon', 1.49, 4);

