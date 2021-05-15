use banking;


insert into CustomerTypes values(3012, "VVIP");
insert into CustomerTypes values(3033, "Super VIP");
insert into CustomerTypes values(3043, "Normal");
insert into CustomerTypes values(3054, "Negative");
insert into CustomerTypes values(3234, "Loyal");
insert into CustomerTypes values(3523, "potential");

insert into Customers values (19019, "Pham Nguyen Ngoc Mai", 0938492034, "ngocmai@gmail.com", "ho chi minh", 3012);
insert into Customers values (18031, "Nguyen Minh Quan", 0304893329, "minhquan@gmail.com", "nam dinh", 3523);
insert into Customers values (19381, "Do Hoang Tuan", 0330493987, "dohoangtuan@gmail.com", "ha tinh", 3043);
insert into Customers values (19431, "Julián Catrin", 0353493039, "fanbeare@gmail.com", "vung tau", 3043);
insert into Customers values (19401, "Anu Ebba",0839951661 , "votnstos@gmail.com", "tien giang", 3234);
insert into Customers values (19511, "Hema Dorte", 0839507751, "eoritnsfs@gmail.com", "ho chi minh", 3523);
insert into Customers values (19491, "Primož Agathe", 0382133029, "fowenfks@gmail.com", "ha noi", 3054);
insert into Customers values (19371, "Katharina Kapila", 0955121061, "fowjeorfos@gmail.com", "can tho", 3043);
insert into Customers values (19903, "Bedwyr Seyfullah", 0238232329 , "eornlnvoasd@gmail.com", "an giang", 3033);
insert into Customers values (19149, "Mubiru Khazhak", 0358213398, "minersostan@gmail.com", "ha tinh", 3043);
insert into Customers values (19439, "Anselmo Eilwen", 0838458392, "foejaidfnm@gmail.com", "nam dinh", 3043);

insert into AccountTypes values (30291, "current account");
insert into AccountTypes values (30292, "saving account");
insert into AccountTypes values (30294, "credit account");

insert into AccountStatus values (302934, "active");
insert into AccountStatus values (302944, "freeze");
insert into AccountStatus values (302304, "fraud");

insert into Accounts values (81001321, 19100, "NguyenVanDat",20180302,590000000,"vandat96tn","06092001",30291,302934);
insert into Accounts values (88481237, 19100, "NguyenVanDat",20190427,100000,"vandat293","06092001",30291,302934);
insert into Accounts values (84589231, 19100, "NguyenVanDat",20101002,142940,"dat96tn","06092001",30291,302934);
insert into Accounts values (88523973, 19019, "PhamNguyenNgocMai",20130922,14300000,"ngocmaicute","250701",30292,302934);
insert into Accounts values (84831973, 19019, "PhamNguyenNgocMai",20110302,120000,"phamnguyenngocmai","ngocmai3029132",30294,302944);
insert into Accounts values (81434973, 19381, "DoHoangTuan",20180302,14043000,"hoangtuanhcm3029","039243hoangtuan",30291,302944);
insert into Accounts values (81434349, 19381, "DoHoangTuan",20191102,240000,"hoangtuancvndo029","039243hoangtuan",30291,302934);
insert into Accounts values (81200973, 19431, "JulianCatrin",20190912,4454000,"minhquanhcmiu392","quan293minh",30291,302934);
insert into Accounts values (81847921, 19401, "AnuEbba",20201202,50000,"anuuuuu33409","0304989danu",30291,302944);
insert into Accounts values (89409123, 19511, "HemaDorte",20020322,1450409000,"herrma04542","djfoe120394",30294,302304);
insert into Accounts values (84893089, 19491, "PrimozAgathe",20020324,14094000,"hdoifogtahhe542","dgathe234032164",30294,302934);
insert into Accounts values (81350943, 19371, "KatharimaKapila",20040612,2875000,"kapilaeofjd542","eofpdf94",30294,302934);
insert into Accounts values (81498263, 19903, "BedwyrSeyfullah",20120121,391302000,"fullart542","dfullah0394",30291,302934);
insert into Accounts values (81748424, 19439, "AnselmoEilwen",20110526,39139000,"elitdwen542","anseldof0394",30294,302934);
insert into Accounts values (81042874, 19149, "MubruKhazhak",20150219,3913000,"khazhakt542","mubrudsasd394",30294,302934);


insert into TransactionStatus values(39283,"In Process");
insert into TransactionStatus values(39284,"Done");
insert into TransactionStatus values(39285,"Fail");
insert into TransactionStatus values(39286,"Cancelled by customer");

insert into TransactionTypes values(49283,"TATM", "Transfer at ATM",3300);
insert into TransactionTypes values(49284,"WithDrawal", "Withdraw monney",0);
insert into TransactionTypes values(49285,"TOnl", "Transfer online",5500);
insert into TransactionTypes values(49286,"TBank", "Transfer at bank",0);
insert into TransactionTypes values(49287,"Recharge", "recharge money",20000);


insert into TransactionLogs values(1347802,20201222,49284,200000, 81001321,39284,"Vung Tau");
