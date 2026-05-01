--
-- PostgreSQL database dump
--


-- Dumped from database version 17.8 (92d3c18)
-- Dumped by pg_dump version 17.9 (Debian 17.9-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS '';


--
-- Name: MethodePaiement; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."MethodePaiement" AS ENUM (
    'CARTE_BANCAIRE',
    'VIREMENT',
    'ESPECES',
    'MOBILE_MONEY',
    'PAIEMENT_A_LA_LIVRAISON',
    'WAVE',
    'ORANGE_MONEY'
);


--
-- Name: Role; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."Role" AS ENUM (
    'ADMIN',
    'SUPER_ADMIN'
);


--
-- Name: StatutClient; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutClient" AS ENUM (
    'ACTIF',
    'INACTIF',
    'BLOQUE'
);


--
-- Name: StatutCommande; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutCommande" AS ENUM (
    'EN_ATTENTE',
    'CONFIRMEE',
    'EN_PREPARATION',
    'EXPEDIEE',
    'LIVREE',
    'ANNULEE'
);


--
-- Name: StatutGIE; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutGIE" AS ENUM (
    'ACTIF',
    'INACTIF',
    'SUSPENDU'
);


--
-- Name: StatutGIEProduit; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutGIEProduit" AS ENUM (
    'EN_ATTENTE',
    'EN_PREPARATION',
    'PRET',
    'ANNULE'
);


--
-- Name: StatutLivreur; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutLivreur" AS ENUM (
    'DISPONIBLE',
    'EN_LIVRAISON',
    'INDISPONIBLE',
    'BLOQUE'
);


--
-- Name: StatutPaiement; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutPaiement" AS ENUM (
    'EN_ATTENTE',
    'VALIDE',
    'ECHEC',
    'REMBOURSE'
);


--
-- Name: StatutProduit; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."StatutProduit" AS ENUM (
    'DISPONIBLE',
    'RUPTURE',
    'HORS_STOCK'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Avite_siteWeb; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Avite_siteWeb" (
    id text NOT NULL,
    "clientId" text NOT NULL,
    nom text,
    rating integer DEFAULT 5 NOT NULL,
    comment text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: administrateurs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.administrateurs (
    id text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    telephone text,
    role public."Role" DEFAULT 'ADMIN'::public."Role" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: adresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.adresses (
    id text NOT NULL,
    nom text NOT NULL,
    description text,
    "codePostal" text,
    "fraisLivraison" double precision DEFAULT 0 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "regionId" text NOT NULL
);


--
-- Name: avis_produit; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.avis_produit (
    id text NOT NULL,
    "clientId" text NOT NULL,
    "produitId" text NOT NULL,
    rating integer DEFAULT 5 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id text NOT NULL,
    nom text NOT NULL,
    couleur text DEFAULT '#3B82F6'::text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    image text,
    conservation text,
    description text
);


--
-- Name: clients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.clients (
    id text NOT NULL,
    email text,
    password text NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    telephone text NOT NULL,
    adresse text,
    statut public."StatutClient" DEFAULT 'ACTIF'::public."StatutClient" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "administrateurId" text NOT NULL
);


--
-- Name: commandes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.commandes (
    id text NOT NULL,
    numero text NOT NULL,
    montant double precision NOT NULL,
    statut public."StatutCommande" DEFAULT 'EN_ATTENTE'::public."StatutCommande" NOT NULL,
    "dateCommande" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "dateLivraison" timestamp(3) without time zone,
    "adresseLivraison" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "clientId" text NOT NULL,
    "fraisLivraison" double precision DEFAULT 0 NOT NULL,
    "livreurId" text,
    "regionLivraisonId" text
);


--
-- Name: gies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.gies (
    id text NOT NULL,
    nom text NOT NULL,
    description text,
    adresse text,
    telephone text,
    email text,
    password text NOT NULL,
    logo text,
    statut public."StatutGIE" DEFAULT 'ACTIF'::public."StatutGIE" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "administrateurId" text NOT NULL,
    "regionId" text,
    url text,
    "Annee" timestamp(3) without time zone,
    membre integer,
    specialite integer
);


--
-- Name: livreurs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.livreurs (
    id text NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL,
    email text NOT NULL,
    telephone text NOT NULL,
    password text NOT NULL,
    statut public."StatutLivreur" DEFAULT 'DISPONIBLE'::public."StatutLivreur" NOT NULL,
    "regionId" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: paiements; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.paiements (
    id text NOT NULL,
    montant double precision NOT NULL,
    methode public."MethodePaiement" NOT NULL,
    statut public."StatutPaiement" DEFAULT 'EN_ATTENTE'::public."StatutPaiement" NOT NULL,
    reference text,
    "datePaiement" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "commandeId" text NOT NULL,
    "fraisLivraison" double precision DEFAULT 0 NOT NULL
);


--
-- Name: panier_produits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.panier_produits (
    id text NOT NULL,
    quantite integer NOT NULL,
    "prixUnitaire" double precision NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "commandeId" text NOT NULL,
    "produitId" text NOT NULL,
    "dateConfirmation" timestamp(3) without time zone,
    "statutGIE" public."StatutGIEProduit" DEFAULT 'EN_ATTENTE'::public."StatutGIEProduit" NOT NULL,
    "updatedAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


--
-- Name: produits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.produits (
    id text NOT NULL,
    nom text NOT NULL,
    description text,
    prix double precision NOT NULL,
    stock integer DEFAULT 0 NOT NULL,
    image text,
    statut public."StatutProduit" DEFAULT 'DISPONIBLE'::public."StatutProduit" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "gieId" text NOT NULL,
    "categorieId" text,
    quantite text DEFAULT ''::text NOT NULL
);


--
-- Name: regions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.regions (
    id text NOT NULL,
    nom text NOT NULL,
    description text,
    "fraisLivraisonInterne" double precision DEFAULT 500 NOT NULL,
    "fraisLivraisonExterne" double precision DEFAULT 2000 NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


--
-- Data for Name: Avite_siteWeb; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Avite_siteWeb" (id, "clientId", nom, rating, comment, "createdAt", "updatedAt") FROM stdin;
cmfzgqsrk00019li8q22f41oy	cmflmtdz5002z9scyk5127csk	\N	4	Super site, très facile à utiliser	2025-09-25 13:43:05.505	2025-09-25 13:43:05.505
cmfzh5sqb00018e3edtiqnwts	cmflmtdz5002z9scyk5127csk	\N	4	Super site, très facile à utiliser	2025-09-25 13:54:45.149	2025-09-25 13:54:45.149
cmfzh5utp00038e3eolrtm38r	cmflmtdz5002z9scyk5127csk	\N	4	Super site, très facile à utiliser	2025-09-25 13:54:46.631	2025-09-25 13:54:46.631
cmgz1xgqd0001tdhab2vk9q6z	cmflmtdz5002z9scyk5127csk	\N	4	j'aime le design de votre site	2025-10-20 11:28:04.506	2025-10-20 11:28:04.506
cmgz25hk00003tdhakeh480ul	cmflmtdz5002z9scyk5127csk	\N	3	cool	2025-10-20 11:34:18.913	2025-10-20 11:34:18.913
cmgz26pf60005tdhac50sto5g	cmflmtdz5002z9scyk5127csk	\N	3	j'aime comment on ajoute les paniers	2025-10-20 11:35:15.678	2025-10-20 11:35:15.678
cmgz2gvt20007tdhawsogn18p	cmflmtdz5002z9scyk5127csk	\N	3	j'aime	2025-10-20 11:43:10.515	2025-10-20 11:43:10.515
cmh3emk9u00018nggoco3yfdf	cmflmtdz5002z9scyk5127csk	\N	3	cool	2025-10-23 12:34:35.671	2025-10-23 12:34:35.671
cmh4vbwf7000111zc9s1h6azy	cmflmtdz5002z9scyk5127csk	\N	2	cool	2025-10-24 13:09:57.774	2025-10-24 13:09:57.774
cmhbyuzej000511zccuvyhlcs	cmhbynx54000311zcoy8sixx9	\N	4	Rapide et fiable.  Merci 	2025-10-29 12:23:10.181	2025-10-29 12:23:10.181
\.


--
-- Data for Name: administrateurs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.administrateurs (id, email, password, nom, prenom, telephone, role, "createdAt", "updatedAt") FROM stdin;
cmfhbo96h00004d3lu69nxz7y	admin@gie.com	$2a$12$lxYkA2Y2d69qHbirrXg/lOoe8CJslCdCISW6WtbL57QwCKnRjXbc2	Admin	Principal	+221777777777	SUPER_ADMIN	2025-09-12 21:01:17.561	2025-09-12 21:01:17.561
\.


--
-- Data for Name: adresses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.adresses (id, nom, description, "codePostal", "fraisLivraison", "createdAt", "updatedAt", "regionId") FROM stdin;
1	Pikine	rail	2798	500	2025-09-16 00:00:00	2025-09-01 00:00:00	reg_1757710881371_4bajg0kuv
\.


--
-- Data for Name: avis_produit; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.avis_produit (id, "clientId", "produitId", rating, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.categories (id, nom, couleur, "createdAt", "updatedAt", image, conservation, description) FROM stdin;
cmfl5ty0b000qcf87ghrqluj7	Halieutiques	#3B82F6	2025-09-15 13:28:50.028	2025-09-15 13:43:39.984	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1757942929/categories/qpvcmdueq63uybiaygfk.jpg	\N	\N
cmfl6f7pc000tcf87it6wjrod	Saponification	#3B82F6	2025-09-15 13:45:22.369	2025-09-15 13:45:22.369	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1757943921/categories/zltwknxvh484jziob9tj.jpg	\N	\N
cmfl6j26m000ucf87196exabj	Transformation Fruits et légumes	#3B82F6	2025-09-15 13:48:21.838	2025-09-15 13:48:21.838	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1757944101/categories/v3mdopuxcdmeverfxdtn.jpg	\N	\N
cmfl6mqi3000vcf87owexp47j	Teintures-Batik	#3B82F6	2025-09-15 13:51:13.323	2025-09-15 13:51:13.323	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1757944272/categories/c9nk4qtmlvryf0kgbecy.png	\N	\N
cmfn931az00001y0miq1byeoc	Artisanat	#3B82F6	2025-09-17 00:35:25.404	2025-09-17 00:37:58.797	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758069325/categories/lgdbd3wolbnxpfg37fgl.jpg	\N	\N
cmfo4oate000983na296x7yxp	céréal	#3B82F6	2025-09-17 15:19:45.602	2025-09-17 15:19:45.602	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758122385/categories/f7dumvshvgwmfrbs2yrw.jpg	\N	\N
\.


--
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.clients (id, email, password, nom, prenom, telephone, adresse, statut, "createdAt", "updatedAt", "administrateurId") FROM stdin;
cmfl7s60u002x9scyvjca226t	client1@example.com	$2a$12$lV7EIDwx4nrQ4tl6BJg2Neb94bIiP.WH0ID6y/FkbhaprXYmw4.Fq	seck	Rama	+221 78 470 42 92	Dakar	ACTIF	2025-09-15 14:23:26.331	2025-09-15 14:23:26.331	cmfhbo96h00004d3lu69nxz7y
cmfljqx7s0001desiumbm9uwg	client@gmail.com	$2a$12$HsuMFg8Z/Wql5xRGpI0KbOa/Vcv9npLeHiKhHNmYPi/mitsSjjqba	Dupont	Jean	+1234567890	123 Rue du Client, Ville	ACTIF	2025-09-15 19:58:23.656	2025-09-15 19:58:23.656	cmfhbo96h00004d3lu69nxz7y
cmflk89240003desil8df61mq	client1@gmail.com	$2a$12$EMWXDnsVzTIFlCMexWTAY.Nhl/FNxDELDV3q5FQUe3HMkXqF1JDgy	Dupont	Jean	+1234567890	123 Rue du Client, Ville	ACTIF	2025-09-15 20:11:52.156	2025-09-15 20:11:52.156	cmfhbo96h00004d3lu69nxz7y
cmflmtdz5002z9scyk5127csk	seckrama098@gmail.com	$2a$12$YeT./QD33iO4M2ITVtiaW.akCoFQdew8OZIwJaXXLPExmh7MvbOtG	seck	Rama	+221 78 470 42 92	Dakar	ACTIF	2025-09-15 21:24:17.538	2025-09-15 21:24:17.538	cmfhbo96h00004d3lu69nxz7y
cmfmh9ug200359scyjb60zval	client12@example.com	$2a$12$dvfJO41Hn713RSArbZr6kOuAnC20EWiuduLI2x5p6NUZP9kN/SM22	seck	Rama	+221 78 470 42 92	Dakar	ACTIF	2025-09-16 11:36:53.858	2025-09-16 11:36:53.858	cmfhbo96h00004d3lu69nxz7y
cmfmhu3bi00011086kuu5um08	client1@1example.com	$2a$12$xFSopQIDZ3P7oAr3RMCVqOjD0r3X1AxfjZ7Oi96G58Ou1QeeZB5OW	seck	Rama	+221 78 470 42 92	Dakar	ACTIF	2025-09-16 11:52:38.472	2025-09-16 11:52:38.472	cmfhbo96h00004d3lu69nxz7y
cmflokr6100319scygul1czuo	seckrama1098@gmail.com	$2a$12$DH2tVAhMCmQuU6gXuXjpOuINZpT4D7MY8TqEyffnCg.HRPxs47S82	Seck	Rama	+221784704292	Dakar	ACTIF	2025-09-15 22:13:33.961	2025-09-15 22:13:33.961	cmfhbo96h00004d3lu69nxz7y
cmfmgxiw800339scytx0af6bf	seckrama0982@gmail.com	$2a$12$LGJNSWVq1AGW8N4wshbZTumKQP8zRIuYuhMe0IGw.QMso1c2uz.rO	seck	Rama	+221784704299	Dakar	ACTIF	2025-09-16 11:27:19.016	2025-09-16 11:27:19.016	cmfhbo96h00004d3lu69nxz7y
cmfmigemd0001xc6nxllrrulm	client2@example.com	$2a$12$E3hP4n9datoPcmexyLsuQOKjaM1mNgSngC1LtVLaL92xARpg37tOq	Dupont	Jean	+1434567890	123 Rue du Client, Ville	ACTIF	2025-09-16 12:09:59.557	2025-09-16 12:09:59.557	cmfhbo96h00004d3lu69nxz7y
cmfmj7h6i0001wshgp2v001wg	client1A2@example.com	$2a$12$YhqPlXWSfTn1ugO2rtZc3uJ/kvWHRtSb3Ud4gUc6zTadI1b2wmipq	seck	Rama	+221 78 470 42 91	Dakar	ACTIF	2025-09-16 12:31:02.586	2025-09-16 12:31:02.586	cmfhbo96h00004d3lu69nxz7y
cmfmljqua0005wshga7gs27vm	diop@gmail.com	$2a$12$h3o8gk4uDu5dqyq/ohiv3u4hiv6QXDXOaIkF7oJgAU.QmsTInf5P2	Diop	Modou	+221 77 855 21 36	Pikine	ACTIF	2025-09-16 13:36:34.211	2025-09-16 13:36:34.211	cmfhbo96h00004d3lu69nxz7y
cmfo0cyay000113wqn1oyz2ex	client41@example.com	$2a$12$qcgs0n.cQOoJOK15BWhzhuRWkcDINt4iGYEYQTCdYzTTpq2KgyRMq	seck	Rama	+221 78 470 42 94	dakar	ACTIF	2025-09-17 13:18:57.707	2025-09-17 13:18:57.707	cmfhbo96h00004d3lu69nxz7y
cmfobbhj7001583narn6doj3j	sidibealune@gmail.com	$2a$12$2t3KRdll8Q6vjaP1MQ1cpOYK7h0xagp.qm6e/gMBN9DFCUOLnz376	Sidibe 	Alune	+221 77 801 28 65	Rao gare	ACTIF	2025-09-17 18:25:45.091	2025-09-17 18:25:45.091	cmfhbo96h00004d3lu69nxz7y
cmfqz9pey0009kux87c5h8tlf	wademodou750@gmail.com	$2a$12$3iN.ub6Fzr6QA5UY2RXR/OZi4ZdiA6M.FoTOF91uzsO3X458vwXim	Wade	Mouhamadou 	+221 77 776 42 67	Saint Louis pikine guinaw rail	ACTIF	2025-09-19 15:11:45.13	2025-09-19 15:11:45.13	cmfhbo96h00004d3lu69nxz7y
cmfr0ckfr000bkux8ktazb925	vieirasall4@gmail.com	$2a$12$cZHWnNlgEcBzVFyK8AWe1egQkPSj19c6AxUfXbCKYZf2HpHBpET7.	SALL	Elimane 	+221 77 276 66 34	Bango, Saint-Louis, Sénégal	ACTIF	2025-09-19 15:41:58.264	2025-09-19 15:41:58.264	cmfhbo96h00004d3lu69nxz7y
cmfvrsdwh000hkux8dmo9f88j	aramebdj@gmail.com	$2a$12$aUNxQ5ITkUeSvm8hNRYwSONYqKumLSEpPuwDVZynJH5GFVoEMKSge	Badji	Arame 	+221 78 108 90 37	Diameguéne saint Louis 	ACTIF	2025-09-22 23:41:10.625	2025-09-22 23:41:10.625	cmfhbo96h00004d3lu69nxz7y
cmfvte085000qkux82e8injqv	seckramas098@gmail.com	$2a$12$vxUOK.QFsa83MMaYxFcZAOgufa5bRvV.zUgFo7EzE8RyxIN0r2M2y	Seck	Rama	+221 78 472 52 63	Adress	ACTIF	2025-09-23 00:25:58.949	2025-09-23 00:25:58.949	cmfhbo96h00004d3lu69nxz7y
cmgikg7sb00011fom9uyqra6q	moussa.farota98@gmail.com	$2a$12$F3TyMgElhHsV.r53N8ADVOsZ8WTADbFpRsXVqO4KshrIGFk8vehdG	Farota	El Hadji Moussa	+221 77 677 35 60	Balacoss, saint Louis	ACTIF	2025-10-08 22:34:27.564	2025-10-08 22:34:27.564	cmfhbo96h00004d3lu69nxz7y
cmhbynx54000311zcoy8sixx9	servicesnafa@gmail.com	$2a$12$sytFchE3/UnAgL4V1O01dOo1BGvfqs8vEqxBmLQ903tl8Lrqz3s4.	Sidibé 	Badou 	+221 76 729 23 02	Rao gare	ACTIF	2025-10-29 12:17:40.744	2025-10-29 12:17:40.744	cmfhbo96h00004d3lu69nxz7y
cmlp8zlej00013a3iozxsp92e	seckrama099@gmail.com	$2a$12$fXq2ZNALc7n0J1FZGcGzE.cp25hRbFo6L7Rzd1saHC1bhDmszIJWa	Seck	Rama	+221 78 470 42 99	Dakar	ACTIF	2026-02-16 14:06:31.196	2026-02-16 14:06:31.196	cmfhbo96h00004d3lu69nxz7y
cmo97ymqg0001gpfpjiu1qzq6	client@example.com	$2a$12$YW8yQqMoGnDmIu8K4EvL4e/TB8pBSPStlt5HsZ980EE/zxttLhmxy	Dupont	Jean	+1234562890	123 Rue du Client, Ville	ACTIF	2026-04-21 22:52:34.84	2026-04-21 22:52:34.84	cmfhbo96h00004d3lu69nxz7y
\.


--
-- Data for Name: commandes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.commandes (id, numero, montant, statut, "dateCommande", "dateLivraison", "adresseLivraison", "createdAt", "updatedAt", "clientId", "fraisLivraison", "livreurId", "regionLivraisonId") FROM stdin;
cmfnxs98s000w42osnyaak0dk	CMD-0e6f473b-a836-4675-9e34-0d8b39ce0168	1000	EN_ATTENTE	2025-09-17 12:06:52.877	2025-09-17 12:06:48.79	Pikine - rail	2025-09-17 12:06:52.877	2025-09-17 12:06:52.877	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnwqke000047w2zkm2ueghm	CMD-d4340e95-389a-4111-b6ed-aa4b90e3af3b	3000	EN_ATTENTE	2025-09-17 11:37:34.392	2024-12-01 10:00:00	Dakar, Sénégal	2025-09-17 11:37:34.392	2025-09-17 11:37:34.392	cmflmtdz5002z9scyk5127csk	100	\N	reg_1757710881371_4bajg0kuv
cmfny9vjj000a7w2z2jxy98l6	CMD-0acd111e-654e-4e39-b800-8d0d046f5248	500	EN_ATTENTE	2025-09-17 12:20:34.927	2025-09-17 12:20:29.624	Pikine - rail	2025-09-17 12:20:34.927	2025-09-17 12:20:34.927	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnys34s000283na16whf8tv	CMD-3543df19-536e-4875-b764-b81e8338014e	500	EN_ATTENTE	2025-09-17 12:34:44.573	2025-09-17 12:34:39.221	Pikine - rail	2025-09-17 12:34:44.573	2025-09-17 12:34:44.573	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnwmn3h000242os7xlww90z	CMD-01a28510-775d-4d20-ab12-778b8c580ec8	500	EN_ATTENTE	2025-09-17 11:34:31.278	2025-09-17 11:34:25.702	Pikine - rail	2025-09-17 11:34:31.278	2025-09-17 11:34:31.278	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnudhm100071y0m5mjbzwv9	CMD-d7e82328-a657-4ea5-acc9-c4c36d94145c	500	LIVREE	2025-09-17 10:31:25.033	2025-09-17 10:30:56.567	Pikine - rail	2025-09-17 10:31:25.033	2025-09-17 11:08:25.294	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfn14r5b000zo6pdispigicf	CMD-965a9849-c441-4799-905c-20f48865ae84	500	EN_ATTENTE	2025-09-16 20:52:48.623	2025-09-16 20:52:40.04	Pikine - rail	2025-09-16 20:52:48.623	2025-09-16 20:52:48.623	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnycm7u0002t7ogn11z6k45	CMD-ba65fa04-560f-425e-b6ab-c697af06fced	500	EN_ATTENTE	2025-09-17 12:22:42.811	2025-09-17 12:22:38.166	Pikine - rail	2025-09-17 12:22:42.811	2025-09-17 12:22:42.811	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfny79cq001e42osz1qn7uzh	CMD-4f0201aa-a63b-475f-92e6-89f6f9bc5181	500	EN_ATTENTE	2025-09-17 12:18:32.858	2025-09-17 12:18:24.564	Pikine - rail	2025-09-17 12:18:32.858	2025-09-17 12:18:32.858	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnx7yed000q42os52a1qu1b	CMD-d2114001-c16c-4ea9-b2fb-0f956b3fc1a4	500	EN_ATTENTE	2025-09-17 11:51:05.701	2025-09-17 11:51:00.559	Pikine - rail	2025-09-17 11:51:05.701	2025-09-17 11:51:05.701	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfny3wfx001842osl6dmehta	CMD-b89fbe6e-1ada-4a0e-9606-46f3f5f1eea0	500	EN_ATTENTE	2025-09-17 12:15:56.157	2025-09-17 12:13:08.13	Pikine - rail	2025-09-17 12:15:56.157	2025-09-17 12:15:56.157	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnxymvg001242os7b0gxp67	CMD-b7362a2b-1704-4d2d-9f48-85517996e1aa	500	EN_ATTENTE	2025-09-17 12:11:50.477	2025-09-17 12:11:46.892	Pikine - rail	2025-09-17 12:11:50.477	2025-09-17 12:11:50.477	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnx6x6x000k42oso4adt2s5	CMD-1349d79c-0b26-486a-99af-77c58dee6aa3	500	EN_ATTENTE	2025-09-17 11:50:17.481	2025-09-17 11:50:13.007	Pikine - rail	2025-09-17 11:50:17.481	2025-09-17 11:50:17.481	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfn0js8u000no6pdu8avazu7	CMD-d05c230e-0289-4c44-8005-0149e6d72468	500	EN_ATTENTE	2025-09-16 20:36:30.27	2025-09-16 20:36:24.158	Pikine - rail	2025-09-16 20:36:30.27	2025-09-16 20:36:30.27	cmflmtdz5002z9scyk5127csk	2000	\N	reg_1757710881371_4bajg0kuv
cmfmzxxkf0008a77lcod3pkay	CMD-7fe97b40-945a-43cb-b8d9-b2dfcdbcb3d7	3000	EN_ATTENTE	2025-09-16 20:19:30.735	2024-12-01 10:00:00	Dakar, Sénégal	2025-09-16 20:19:30.735	2025-09-16 20:19:30.735	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfmzbvji0002rijc872zsr5d	CMD-fcf80a3b-6d1a-46c0-8a0b-d8f0b594206d	3000	EN_ATTENTE	2025-09-16 20:02:21.678	2024-12-01 10:00:00	Dakar, Sénégal	2025-09-16 20:02:21.678	2025-09-16 20:02:21.678	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfn0rp10000to6pduzwg9s5s	CMD-2de256e5-9227-4434-92be-1dfb4834fb4d	500	EN_ATTENTE	2025-09-16 20:42:39.348	2025-09-16 20:42:33.765	pikine	2025-09-16 20:42:39.348	2025-09-16 20:42:39.348	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfnwt8z1000842os8jfx5uie	CMD-1fbb7d34-d612-4b0b-840b-e8561c620d37	500	EN_ATTENTE	2025-09-17 11:39:39.565	2025-09-17 11:39:35.533	Pikine - rail	2025-09-17 11:39:39.565	2025-09-17 11:39:39.565	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfmxqzk4000svyynkg7f8tjj	CMD-baa7797c-fca3-4c6b-8256-0ad53bdae8e3	500	EN_ATTENTE	2025-09-16 19:18:07.492	2025-09-16 19:18:06.517	Pikine - rail	2025-09-16 19:18:07.492	2025-09-16 19:18:07.492	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfn009sr000ho6pd9rax9f6w	CMD-f4a6c601-319a-4fe7-bf02-722eb288834c	3000	EN_ATTENTE	2025-09-16 20:21:19.899	2024-12-01 10:00:00	Dakar, Sénégal	2025-09-16 20:21:19.899	2025-09-16 20:21:19.899	cmflmtdz5002z9scyk5127csk	100	\N	reg_1757710881371_4bajg0kuv
cmfnx5b2r000e42os4tuxetw2	CMD-a76da88b-a4a1-4678-935c-776dbf1454dd	500	EN_ATTENTE	2025-09-17 11:49:02.163	2025-09-17 11:48:57.089	Pikine - rail	2025-09-17 11:49:02.163	2025-09-17 11:49:02.163	cmflmtdz5002z9scyk5127csk	500	\N	reg_1757710881371_4bajg0kuv
cmfmx1ecz000ivyynzvc97spk	CMD-6d883eb0-055b-4dd5-9cb7-eb94a742e1da	500	EN_ATTENTE	2025-09-16 18:58:13.619	2025-09-16 18:58:12.161	Pikine - rail	2025-09-16 18:58:13.619	2025-09-16 18:58:13.619	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfmlm2ga0008wshg8so60shj	CMD-8161c265-7f9a-4adc-bc40-ca6a815900a2	15000	CONFIRMEE	2025-09-16 13:38:22.57	2025-09-16 13:38:19.112	Pikine	2025-09-16 13:38:22.57	2025-09-16 13:39:57.285	cmfmljqua0005wshga7gs27vm	0	\N	reg_1757710881371_4bajg0kuv
cmfmxzb7y000xvyyndvj37i34	CMD-aca26a70-79bd-4117-aaf6-348cb3223592	500	EN_ATTENTE	2025-09-16 19:24:35.854	2025-09-16 19:24:34.532	Pikine - rail	2025-09-16 19:24:35.854	2025-09-16 19:24:35.854	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfmx2ie0000nvyyncd36bjav	CMD-72d875d8-4792-40b5-bb63-06aaa1f00831	1000	EN_ATTENTE	2025-09-16 18:59:05.497	2025-09-16 18:59:04.383	Pikine - rail	2025-09-16 18:59:05.497	2025-09-16 18:59:05.497	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfmydxtu0012vyynhektqc6t	CMD-78f857d3-44e5-4f0b-a61a-58863609de66	500	EN_ATTENTE	2025-09-16 19:35:58.339	2025-09-16 19:35:56.043	Pikine - rail	2025-09-16 19:35:58.339	2025-09-16 19:35:58.339	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfmt1q8l0009vyynsr5f049b	CMD-8fbadf33-308e-4b4a-b919-7ea4c2ac0d7e	500	CONFIRMEE	2025-09-16 17:06:30.55	2025-09-16 17:06:29.615	Pikine - rail	2025-09-16 17:06:30.55	2025-09-16 18:56:33.64	cmflmtdz5002z9scyk5127csk	0	\N	reg_1757710881371_4bajg0kuv
cmfo0in3b000413wqe05tlhtv	CMD-a5d4572e-4cc6-41dc-b183-f8518705295b	500	ANNULEE	2025-09-17 13:23:23.111	2025-09-17 13:23:16.339	Pikine - rail	2025-09-17 13:23:23.111	2025-09-17 15:10:50.996	cmfo0cyay000113wqn1oyz2ex	500	\N	reg_1757710881371_4bajg0kuv
cmfo1spbc0002z2dv91pn5nj1	CMD-84f42182-a603-4ab9-9089-935bdea853b4	1000	LIVREE	2025-09-17 13:59:12.168	2025-09-17 13:59:05.584	Pikine - rail	2025-09-17 13:59:12.168	2025-09-17 15:10:57.111	cmfo0cyay000113wqn1oyz2ex	500	\N	reg_1757710881371_4bajg0kuv
cmfoaw9wi001083nardvnalvy	CMD-2e7f1765-1a50-4eac-b3d5-2e0fbad93233	500	CONFIRMEE	2025-09-17 18:13:55.362	2025-09-18 00:13:59.981	Dakar	2025-09-17 18:13:55.362	2025-09-18 00:13:59.982	cmflokr6100319scygul1czuo	500	liv_1758030276741	reg_1757710880768_uroj9fa2l
cmfo7v4gt000q83na30sq13my	CMD-e482b906-9bd2-495b-b0e4-47c2cccff398	500	CONFIRMEE	2025-09-17 16:49:02.814	2025-09-18 00:03:31.862	Pikine - rail	2025-09-17 16:49:02.814	2025-09-18 00:03:31.863	cmflmtdz5002z9scyk5127csk	500	liv_1758030276741	reg_1757710881371_4bajg0kuv
cmfo6qewk000e83najojspkpu	CMD-ad73b001-644a-4850-844c-14ad10b36c25	500	LIVREE	2025-09-17 16:17:23.445	2025-09-17 23:35:31.303	Pikine - rail	2025-09-17 16:17:23.445	2025-09-17 23:35:31.304	cmflmtdz5002z9scyk5127csk	500	liv_1758030276741	reg_1757710881371_4bajg0kuv
cmfoocc9o00023c2bee4byfsq	CMD-8f2998f3-46cf-43d8-bc93-38d3fccebec0	1000	LIVREE	2025-09-18 00:30:19.932	2025-09-18 00:52:22.829	Pikine - rail	2025-09-18 00:30:19.932	2025-09-18 00:52:22.83	cmflmtdz5002z9scyk5127csk	500	liv_1758030276741	reg_1757710881371_4bajg0kuv
cmfopxsvi00083c2bva305sk6	CMD-a349a2e3-69bb-419e-8ab8-39b8b3ad6fe3	500	LIVREE	2025-09-18 01:15:00.846	2025-09-18 01:35:53.693	Pikine - rail	2025-09-18 01:15:00.846	2025-09-18 01:35:53.694	cmflmtdz5002z9scyk5127csk	500	liv_1758030276741	reg_1757710881371_4bajg0kuv
cmformlfw000n3c2buxtzyzqp	CMD-75d53437-f2fd-4427-8c5f-63e1cf5511c8	2000	LIVREE	2025-09-18 02:02:17.229	2025-09-18 02:02:54.332	Pikine - rail	2025-09-18 02:02:17.229	2025-09-18 02:02:54.332	cmflmtdz5002z9scyk5127csk	500	liv_1758030276741	reg_1757710881371_4bajg0kuv
cmfobeakj001883namtign2cm	CMD-a44861ff-f536-437f-ba37-0748981c15e0	4000	LIVREE	2025-09-17 18:27:56.036	2025-09-17 18:27:40.543	Pikine - rail	2025-09-17 18:27:56.036	2025-09-18 09:41:45.517	cmfobbhj7001583narn6doj3j	500	\N	reg_1757710881371_4bajg0kuv
cmfq0f6sy0004kux8wwe41dx5	CMD-a086bfc5-2b15-4759-8216-64adcef11437	600	CONFIRMEE	2025-09-18 22:56:14.386	2025-09-18 22:56:05.998	Pikine - rail	2025-09-18 22:56:14.386	2025-09-24 14:59:25.292	cmflokr6100319scygul1czuo	500	\N	reg_1757710881371_4bajg0kuv
cmfvservn000kkux8wsopflmd	CMD-150365dd-9ecb-4a89-82ce-990b69fc8e19	1200	CONFIRMEE	2025-09-22 23:58:35.171	2025-09-22 23:58:13.211	Pikine - rail	2025-09-22 23:58:35.171	2025-09-24 15:00:12.345	cmfvrsdwh000hkux8dmo9f88j	500	\N	reg_1757710881371_4bajg0kuv
cmg0n1btx000tkux830i32p0h	CMD-c1064ff2-0d49-4841-9264-a5a12f5b586d	1200	EN_ATTENTE	2025-09-26 09:27:00.645	2025-09-26 09:26:47.031	Pikine - rail	2025-09-26 09:27:00.645	2025-09-26 09:27:00.645	cmfqz9pey0009kux87c5h8tlf	1000	\N	reg_1757710881371_4bajg0kuv
cmhj4q8ij000811zctrq7ecjg	CMD-156b8317-a6e4-4a4e-9edd-113a38a5a11f	2000	EN_ATTENTE	2025-11-03 12:41:49.723	2025-11-03 12:41:18.126	Pikine - rail	2025-11-03 12:41:49.723	2025-11-03 12:41:49.723	cmhbynx54000311zcoy8sixx9	1000	\N	reg_1757710881371_4bajg0kuv
cmlp91cc30002lw8lk4juxxua	CMD-2bd1ba82-54dd-41f6-b2ab-e726c38e75bf	600	EN_ATTENTE	2026-02-16 14:07:52.756	2026-02-16 14:07:41.576	Pikine - rail	2026-02-16 14:07:52.756	2026-02-16 14:07:52.756	cmlp8zlej00013a3iozxsp92e	1000	\N	reg_1757710881371_4bajg0kuv
cmmc1t8di0002oeyomj0nf1nv	CMD-707c0538-f096-4b84-8fcc-85fa2e03ecca	1200	EN_ATTENTE	2026-03-04 13:04:19.11	2026-03-04 13:04:01.76	Pikine - rail	2026-03-04 13:04:19.11	2026-03-04 13:04:19.11	cmfobbhj7001583narn6doj3j	1000	\N	reg_1757710881371_4bajg0kuv
cmo1tjm4y0002rp0hs3la7uej	CMD-0ad94458-9e49-4180-ad64-bf9f82c4e94a	200	EN_ATTENTE	2026-04-16 18:34:36.37	2026-04-16 18:34:31.6	Dakar	2026-04-16 18:34:36.37	2026-04-16 18:34:36.37	cmfvte085000qkux82e8injqv	1000	\N	reg_1757710880768_uroj9fa2l
cmohghuy500025kxpaxvadusf	CMD-bb99abbf-cab5-44f9-8ffc-398df3a8937e	1100	EN_ATTENTE	2026-04-27 17:13:38.285	2026-04-27 17:13:35.014	Pikine - rail	2026-04-27 17:13:38.285	2026-04-27 17:13:38.285	cmfvte085000qkux82e8injqv	1000	\N	reg_1757710881371_4bajg0kuv
\.


--
-- Data for Name: gies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.gies (id, nom, description, adresse, telephone, email, password, logo, statut, "createdAt", "updatedAt", "administrateurId", "regionId", url, "Annee", membre, specialite) FROM stdin;
cmfkg1vop000fcf8707y4qz3q	Soopey Dabakh	Céréales locales, détergents etc...	Leona	+221776167209	admin@gie.com	$2a$12$LQbPwNAISmhHqLO.s1N67eSPzwi9qDJeHRnPVmkPXIVW6Y9feJCU6	\N	ACTIF	2025-09-15 01:27:10.249	2025-09-15 01:27:10.249	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-28 00:00:00	9	\N
cmfpihsfa0001kux8996nvmyi	SOPEY DABAKH	Transformation produit céréale et javellisation	Leona	+221775664038		$2a$12$8XmnVqS1yj/LhtxBfjF1KeGlrxlLSvXnQvVf2KDWgtl8Af80Z2eEC	\N	ACTIF	2025-09-18 14:34:22.63	2025-09-18 14:34:22.63	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-23 00:00:00	13	\N
cmfkfnxs20009cf8717gfp0k7	DIOKKERE ENDAM	Agroalimentaires, saponification,teinture	NDIOLOFFENE	+221771734201	admin@gie.com	$2a$12$ZzZws6WlT55gInI69V87AeDCEIyE//tN9GMsLHv.gcwjIqijyLzUO	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758048280/categories/hwh97npr3gfp3hrrys4v.jpg	ACTIF	2025-09-15 01:16:19.778	2025-09-15 13:46:08.135	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-21 00:00:00	20	\N
cmfkfslzz000bcf87s2cnrd83	Daan sa dooley	Transformation produits halieutiques 	Guet ndar	+221772342071	admin@gie.com	$2a$12$uEVgPvvtLoGMMwsgqK7LPe5YXUZZfybgVAPrHK9MmiN90YQXOHpeS	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758051977/categories/zeab910glh7gbuauwli1.jpg	ACTIF	2025-09-15 01:19:57.792	2025-09-18 11:01:59.934	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-19 00:00:00	5	\N
cmfkg4y65000hcf87yy7xlw3q	Foula ak Fayda	céréales locales	Ndioloffene	+221778689069	admin@gie.com	$2a$12$/GNi1TCOtDHJ3zLt7Lfg0.iU1Zs1rtoOlWldsklWzf/L1da.d6Gp2	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758048077/categories/jqxxpa4kmresoasbdiot.jpg	ACTIF	2025-09-15 01:29:33.437	2025-09-15 01:29:33.437	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-10 00:00:00	12	\N
cmfkfi0ps0007cf873xat4xxa	URDAA	produits halieutiques, sérigraphie, teinture, objet d'art	Village Artisanal	+221776519141	admin@gie.com	$2a$12$SDwIpo1N8KmmyD5Ri2Z20OO1urTGD2z20mKD/o5APZKGM6cUAzbou	\N	ACTIF	2025-09-15 01:11:43.648	2025-09-15 01:11:43.648	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-14 00:00:00	10	\N
cmfk6alxv0003cf877xjcy6xz	RamaAgro	agroo	Dakar	+221784704299		$2a$12$BDirGH1uNWB8w4Bfsjq1sOCAQZULHNpxFyqQoIrqvZD4Ddjq/aiZm	\N	ACTIF	2025-09-14 20:54:01.364	2025-09-14 20:54:14.799	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-01 00:00:00	20	\N
cmfkfc7ze0005cf87czvzg6e7	IGF/DHL	Productrice de céréaliers	HLM	+221776476897	admin@gie.com	$2a$12$D/Us4uJtUIY7WRiDCArVqe8hw0EbF1lTW7NpSZhTx.JNKensRZWOm	\N	ACTIF	2025-09-15 01:07:13.13	2025-09-15 01:07:13.13	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-16 00:00:00	34	12
cmfnu17n100021y0ma9chlvpt	Rama Agro	vente de produits	Dakar	+221784704292	seckrama018@gmail.com	$2a$12$o1KvXVjW9rIr2h9VuGWqEOqGPsxZ7noJjBTgcDoJB9/Rfb2O.16QC	\N	ACTIF	2025-09-17 10:21:52.233	2025-09-17 16:51:10.524	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-12 00:00:00	14	\N
cmfkg9z7s000jcf8759k43w7q	Union Locale	Produits halieutiques	Goxxu Badj	+221779126391	admin@gie.com	$2a$12$h55N7mIJszupGB2gL5zAzeKADudD0xkPsFy/8pmHtPpRdQyhIpGOa	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758048180/categories/eyvotbix60zwomqdsqw4.jpg	ACTIF	2025-09-15 01:33:28.073	2025-11-14 19:54:20.23	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-29 00:00:00	40	\N
cmig2x3ls0007g2t03soaxy9n	Gie	AZZZZZ	SODIDA	+221784704293	seckrama08@gmail.com	$2a$12$AKTO3qT/IZKUYJYkK/gjpOul5T6yoP9R6YXlngue03E1hzRMiZmli	\N	ACTIF	2025-11-26 14:07:34.527	2025-11-26 14:07:34.527	cmfhbo96h00004d3lu69nxz7y	\N	\N	\N	\N	\N
cmfkfxmwf000dcf87yit6so2l	Sanar Agro	transformation céréales locales, production agricole	Sanar	+22775163533	admin@gie.com	$2a$12$sHdJkIk2SCx7CKxzpYwp7.FMPxk2t4KHfyoMpEu3AbeMvuCTNqap2	\N	ACTIF	2025-09-15 01:23:52.239	2025-09-15 01:23:52.239	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-27 00:00:00	10	\N
cmfkgcmut000lcf87orydcwfl	Jigeenu Wallu Ndar	Transformation des produits locaux	ENO	+221771189900	admin@gie.com	$2a$12$osnYRX111oxM9qqrIu44VOUbRQRgXSb/Kpy6PBZ.KXh1v//fH/h3S	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758051820/categories/y7ts4ptquwbltuotandi.jpg	ACTIF	2025-09-15 01:35:32.021	2025-09-15 18:38:29.873	cmfhbo96h00004d3lu69nxz7y	\N	\N	2025-10-19 00:00:00	12	\N
cmiyr489e0009g2t0frvjv5o2	jambar	AAZZE	dakar	+221784704291	seckrama078@gmail.com	$2a$12$hm2PD8fha9QTpPyFG4eSc..UM9QMulb1t9rHm2WYeQtKavgCbwoCi	\N	ACTIF	2025-12-09 15:44:49.098	2025-12-09 15:44:49.098	cmfhbo96h00004d3lu69nxz7y	\N	\N	\N	\N	\N
cmo0dktlc0001ew68s6nmpowp	Gueme	gie	dakar	+221784704295	seckrama098@gmail.com	$2a$12$my6gps.EIlpF5psyuDu3KeqCx9CjG9tqgnMljLlNXz.aS3VCmEoaK	\N	ACTIF	2026-04-15 18:19:52.656	2026-04-15 18:19:52.656	cmfhbo96h00004d3lu69nxz7y	\N	\N	\N	\N	\N
cmohgaamo0001110ujzht0qzx	gie	gie	dakar	+221784704289	seckrama0901@gmail.com	$2a$12$0kBmPIeoX1fEhlzjr/Z2LeGEjZ7lymmZsWz03ItYMP0QcYm82ewZ.	\N	ACTIF	2026-04-27 17:07:45.36	2026-04-27 17:07:45.36	cmfhbo96h00004d3lu69nxz7y	\N	\N	\N	\N	\N
\.


--
-- Data for Name: livreurs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.livreurs (id, nom, prenom, email, telephone, password, statut, "regionId", "createdAt", "updatedAt") FROM stdin;
1	njabatech	njabatech	njabatech.com	+221784704292	sl123	DISPONIBLE	reg_1757710881371_4bajg0kuv	2025-09-15 22:23:22.262	2025-09-15 00:00:00
liv_1758030276741	 	njabatech	Njabatech@gmail.com	+221701234567	$2a$10$N4lcGc5Hdhvxlck5JBPcyO8L1g7EpQlHWHT/E/oC..ZN4mhKp/O0W	DISPONIBLE	reg_1757710881371_4bajg0kuv	2025-09-16 13:44:36.743	2025-09-16 13:44:36.741
\.


--
-- Data for Name: paiements; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.paiements (id, montant, methode, statut, reference, "datePaiement", "createdAt", "updatedAt", "commandeId", "fraisLivraison") FROM stdin;
cmfmzbvji0005rijc0kh25ixs	3000	ORANGE_MONEY	VALIDE	OM123456789	2025-09-16 20:02:21.678	2025-09-16 20:02:21.678	2025-09-16 20:02:21.678	cmfmzbvji0002rijc872zsr5d	0
cmfmzxxkf000ba77l2fbcoyvw	3000	ORANGE_MONEY	VALIDE	OM12345678=19	2025-09-16 20:19:30.735	2025-09-16 20:19:30.735	2025-09-16 20:19:30.735	cmfmzxxkf0008a77lcod3pkay	0
cmfn009sr000ko6pdw6kuzvoc	3000	ORANGE_MONEY	VALIDE	OM123456782=19	2025-09-16 20:21:19.899	2025-09-16 20:21:19.899	2025-09-16 20:21:19.899	cmfn009sr000ho6pd9rax9f6w	0
cmfn0js8u000qo6pd8wvgbeh1	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758054988054	2025-09-16 20:36:30.27	2025-09-16 20:36:30.27	2025-09-16 20:36:30.27	cmfn0js8u000no6pdu8avazu7	0
cmfn0rp10000wo6pdidesn0pw	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758055357706	2025-09-16 20:42:39.348	2025-09-16 20:42:39.348	2025-09-16 20:42:39.348	cmfn0rp10000to6pduzwg9s5s	0
cmfn14r5b0012o6pdu11523ok	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758055965390	2025-09-16 20:52:48.623	2025-09-16 20:52:48.623	2025-09-16 20:52:48.623	cmfn14r5b000zo6pdispigicf	0
cmfnudhm1000a1y0m6qhdcspy	500	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758105083647	2025-09-17 10:31:25.033	2025-09-17 10:31:25.033	2025-09-17 11:02:24.143	cmfnudhm100071y0m5mjbzwv9	0
cmfnwmn3h000542osr004qlz1	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758108870260	2025-09-17 11:34:31.278	2025-09-17 11:34:31.278	2025-09-17 11:34:31.278	cmfnwmn3h000242os7xlww90z	0
cmfnwqke000077w2zqeavjnyz	3000	ORANGE_MONEY	VALIDE	OM12345678119	2025-09-17 11:37:34.392	2025-09-17 11:37:34.392	2025-09-17 11:37:34.392	cmfnwqke000047w2zkm2ueghm	0
cmfnwt8z1000b42osa18lwnrs	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758109178717	2025-09-17 11:39:39.565	2025-09-17 11:39:39.565	2025-09-17 11:39:39.565	cmfnwt8z1000842os8jfx5uie	0
cmfnx5b2r000h42os6ejfobzr	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758109741046	2025-09-17 11:49:02.163	2025-09-17 11:49:02.163	2025-09-17 11:49:02.163	cmfnx5b2r000e42os4tuxetw2	0
cmfnx6x6x000n42os4ihut0aa	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758109816444	2025-09-17 11:50:17.481	2025-09-17 11:50:17.481	2025-09-17 11:50:17.481	cmfnx6x6x000k42oso4adt2s5	0
cmfnx7yed000t42os9mrzqpr7	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758109864470	2025-09-17 11:51:05.701	2025-09-17 11:51:05.701	2025-09-17 11:51:05.701	cmfnx7yed000q42os52a1qu1b	0
cmfnxs98s000z42osti34bhqi	1000	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758110811813	2025-09-17 12:06:52.877	2025-09-17 12:06:52.877	2025-09-17 12:06:52.877	cmfnxs98s000w42osnyaak0dk	0
cmfnxymvh001542os7bnss50f	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758111109457	2025-09-17 12:11:50.477	2025-09-17 12:11:50.477	2025-09-17 12:11:50.477	cmfnxymvg001242os7b0gxp67	0
cmfny3wfx001b42osvuz1ckrw	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758111355188	2025-09-17 12:15:56.157	2025-09-17 12:15:56.157	2025-09-17 12:15:56.157	cmfny3wfx001842osl6dmehta	0
cmfny79cq001h42osripqbcsm	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758111511637	2025-09-17 12:18:32.858	2025-09-17 12:18:32.858	2025-09-17 12:18:32.858	cmfny79cq001e42osz1qn7uzh	0
cmfny9vjj000d7w2zaq5sdijl	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758111633579	2025-09-17 12:20:34.927	2025-09-17 12:20:34.927	2025-09-17 12:20:34.927	cmfny9vjj000a7w2z2jxy98l6	0
cmfnycm7v0005t7ogwstxcdl7	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758111761721	2025-09-17 12:22:42.811	2025-09-17 12:22:42.811	2025-09-17 12:22:42.811	cmfnycm7u0002t7ogn11z6k45	0
cmfnys34s000583na2rxqfa4v	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758112483518	2025-09-17 12:34:44.573	2025-09-17 12:34:44.573	2025-09-17 12:34:44.573	cmfnys34s000283na16whf8tv	0
cmfo0in3c000713wqgk9eluf3	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758115401652	2025-09-17 13:23:23.111	2025-09-17 13:23:23.111	2025-09-17 13:23:23.111	cmfo0in3b000413wqe05tlhtv	0
cmfo1spbc0005z2dvpbluiw5i	1000	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758117550791	2025-09-17 13:59:12.168	2025-09-17 13:59:12.168	2025-09-17 15:10:41.366	cmfo1spbc0002z2dv91pn5nj1	0
cmfo6qewk000h83na7cysbe5q	500	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758125842338	2025-09-17 16:17:23.445	2025-09-17 16:17:23.445	2025-09-17 16:19:20.788	cmfo6qewk000e83najojspkpu	0
cmfo7v4gt000t83na7fdsoa8m	500	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758127741676	2025-09-17 16:49:02.814	2025-09-17 16:49:02.814	2025-09-17 16:50:51.157	cmfo7v4gt000q83na30sq13my	0
cmfoaw9wi001383nartq2uell	500	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758132833857	2025-09-17 18:13:55.362	2025-09-17 18:13:55.362	2025-09-18 00:21:49.697	cmfoaw9wi001083nardvnalvy	0
cmfoocc9o00053c2bqyt423qu	1000	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758155419050	2025-09-18 00:30:19.932	2025-09-18 00:30:19.932	2025-09-18 00:50:28.271	cmfoocc9o00023c2bee4byfsq	0
cmfopxsvi000b3c2bhxvosgfn	500	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758158100033	2025-09-18 01:15:00.846	2025-09-18 01:15:00.846	2025-09-18 01:15:00.846	cmfopxsvi00083c2bva305sk6	0
cmformlfw000q3c2bz60buwtk	2000	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758160936014	2025-09-18 02:02:17.229	2025-09-18 02:02:17.229	2025-09-18 02:02:17.229	cmformlfw000n3c2buxtzyzqp	0
cmfobeakj001b83na7odjdg35	4000	PAIEMENT_A_LA_LIVRAISON	VALIDE	CASH-1758133674932	2025-09-17 18:27:56.036	2025-09-17 18:27:56.036	2025-09-18 09:40:41.058	cmfobeakj001883namtign2cm	0
cmfq0f6sy0007kux834xn2oey	600	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758236172730	2025-09-18 22:56:14.386	2025-09-18 22:56:14.386	2025-09-18 22:56:14.386	cmfq0f6sy0004kux8wwe41dx5	0
cmfvservn000okux8caww6aob	1200	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758585514040	2025-09-22 23:58:35.171	2025-09-22 23:58:35.171	2025-09-22 23:58:35.171	cmfvservn000kkux8wsopflmd	0
cmg0n1btx000wkux8f7k17y4t	1200	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1758878818269	2025-09-26 09:27:00.645	2025-09-26 09:27:00.645	2025-09-26 09:27:00.645	cmg0n1btx000tkux830i32p0h	0
cmhj4q8ij000b11zc8bv4w34v	2000	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1762173708335	2025-11-03 12:41:49.723	2025-11-03 12:41:49.723	2025-11-03 12:41:49.723	cmhj4q8ij000811zctrq7ecjg	0
cmlp91cc40005lw8lvikw1924	600	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1771250872219	2026-02-16 14:07:52.756	2026-02-16 14:07:52.756	2026-02-16 14:07:52.756	cmlp91cc30002lw8lk4juxxua	0
cmmc1t8di0005oeyow371jfzf	1200	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1772629458706	2026-03-04 13:04:19.11	2026-03-04 13:04:19.11	2026-03-04 13:04:19.11	cmmc1t8di0002oeyomj0nf1nv	0
cmo1tjm4y0005rp0h89cjdkxx	200	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1776364475673	2026-04-16 18:34:36.37	2026-04-16 18:34:36.37	2026-04-16 18:34:36.37	cmo1tjm4y0002rp0hs3la7uej	0
cmohghuy500065kxprv2n3gdt	1100	PAIEMENT_A_LA_LIVRAISON	EN_ATTENTE	CASH-1777310017739	2026-04-27 17:13:38.285	2026-04-27 17:13:38.285	2026-04-27 17:13:38.285	cmohghuy500025kxpaxvadusf	0
\.


--
-- Data for Name: panier_produits; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.panier_produits (id, quantite, "prixUnitaire", "createdAt", "commandeId", "produitId", "dateConfirmation", "statutGIE", "updatedAt") FROM stdin;
cmfmlm2ga000awshgdppc4uol	3	5000	2025-09-16 13:38:22.57	cmfmlm2ga0008wshg8so60shj	cmfml56yu0003wshgjaak37ae	\N	EN_ATTENTE	2025-09-16 13:38:22.57
cmfq0f6sy0006kux89dy9t7y9	1	600	2025-09-18 22:56:14.386	cmfq0f6sy0004kux8wwe41dx5	cmfp6v3q70001114mbb50xybe	\N	EN_ATTENTE	2025-09-18 22:56:14.386
cmfvservn000mkux8g0fk29fb	1	600	2025-09-22 23:58:35.171	cmfvservn000kkux8wsopflmd	cmfp6v3q70001114mbb50xybe	\N	EN_ATTENTE	2025-09-22 23:58:35.171
cmfvservn000nkux8pnjlint6	1	600	2025-09-22 23:58:35.171	cmfvservn000kkux8wsopflmd	cmfoi3op4001d83najxnwuwfo	\N	EN_ATTENTE	2025-09-22 23:58:35.171
cmg0n1btx000vkux8kkcv4e3z	2	600	2025-09-26 09:27:00.645	cmg0n1btx000tkux830i32p0h	cmfp6v3q70001114mbb50xybe	\N	EN_ATTENTE	2025-09-26 09:27:00.645
cmhj4q8ij000a11zci2y9yzlw	1	2000	2025-11-03 12:41:49.723	cmhj4q8ij000811zctrq7ecjg	cmfuyhfu8000fkux8m2uu8ml1	\N	EN_ATTENTE	2025-11-03 12:41:49.723
cmlp91cc30004lw8l3itisfyx	1	600	2026-02-16 14:07:52.756	cmlp91cc30002lw8lk4juxxua	cmfp6v3q70001114mbb50xybe	\N	EN_ATTENTE	2026-02-16 14:07:52.756
cmmc1t8di0004oeyo4a4jxu1v	2	600	2026-03-04 13:04:19.11	cmmc1t8di0002oeyomj0nf1nv	cmfoi3op4001d83najxnwuwfo	\N	EN_ATTENTE	2026-03-04 13:04:19.11
cmo1tjm4y0004rp0h0fy524je	1	200	2026-04-16 18:34:36.37	cmo1tjm4y0002rp0hs3la7uej	cmo0ef2l600017iv88zm1kq26	\N	EN_ATTENTE	2026-04-16 18:34:36.37
cmohghuy500045kxpcaoskt78	1	600	2026-04-27 17:13:38.285	cmohghuy500025kxpaxvadusf	cmfp6v3q70001114mbb50xybe	\N	EN_ATTENTE	2026-04-27 17:13:38.285
cmohghuy500055kxpg0kwfadh	1	500	2026-04-27 17:13:38.285	cmohghuy500025kxpaxvadusf	cmohgeasz0001mfrkyh52n1n4	\N	EN_ATTENTE	2026-04-27 17:13:38.285
\.


--
-- Data for Name: produits; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.produits (id, nom, description, prix, stock, image, statut, "createdAt", "updatedAt", "gieId", "categorieId", quantite) FROM stdin;
cmflg8tuu0011cf87yjnb4k7s	Savon Solide Jigeenu Wallu Ndar	Savon Lessive Solide – GIE Jigeenu Wallu Ndar\nSavon artisanal fabriqué à Saint-Louis, pratique et efficace pour tous vos besoins de lavage. Il mousse facilement, élimine les taches tenaces et laisse le linge propre et frais. Disponible en plusieurs couleurs, il allie qualité, durabilité et savoir-faire local.	350	100	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758206832/produits/ee80bzawqccjln3yygn7.jpg	DISPONIBLE	2025-09-15 18:20:20.647	2025-09-18 14:47:13.143	cmfkgcmut000lcf87orydcwfl	cmfl6f7pc000tcf87it6wjrod	250g
cmfuydy0k000dkux8iesjkwuv	Guedjou yass	Poisson frais transformé puis séché dans de très bonnes conditions	15000	50	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758535087/produits/qr4elrusstg0lryqtkre.jpg	DISPONIBLE	2025-09-22 09:58:07.988	2025-09-22 09:58:07.988	cmfkfslzz000bcf87s2cnrd83	cmfl5ty0b000qcf87ghrqluj7	1kg/500
cmo0ef2l600017iv88zm1kq26	bouye	frais et bon	200	99	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1776364391/produits/yhgcm074qvabhlyj2uwp.jpg	DISPONIBLE	2026-04-15 18:43:23.995	2026-04-16 18:34:36.349	cmo0dktlc0001ew68s6nmpowp	cmfo4oate000983na296x7yxp	1kg
cmflgp9ju0013cf87yca5gwt2	Mangue séchée	Trasformation fruits er légumes	2000	5	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1757961186/produits/zadcazonxfvkqjn48npk.jpg	DISPONIBLE	2025-09-15 18:33:07.482	2025-09-15 18:33:07.482	cmfkg1vop000fcf8707y4qz3q	cmfl6j26m000ucf87196exabj	500g
cmfml56yu0003wshgjaak37ae	Peinture	Qualité	5000	47	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758029114/produits/u6yhewc46s5ugnjsw8yx.jpg	DISPONIBLE	2025-09-16 13:25:15.27	2025-09-16 13:38:23.419	cmfkfi0ps0007cf873xat4xxa	cmfl6mqi3000vcf87owexp47j	50
cmfmluv9j000cwshg2x2hwvow	Poupé Africain	Style purement Africain	5000	20	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758030312/produits/rvudwmlsx1nxbz7wugel.jpg	DISPONIBLE	2025-09-16 13:45:13.159	2025-09-16 13:45:13.159	cmfkfi0ps0007cf873xat4xxa	cmfl6mqi3000vcf87owexp47j	20
cmhz9svih0003g2t03jzn50p9	Guèdjie siikk	Guèdjie siikk de bon qualité	2000	100	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1763149688/produits/dgg65lnqzdoap6srv2da.jpg	DISPONIBLE	2025-11-14 19:48:09.737	2025-11-14 19:48:09.737	cmfkg9z7s000jcf8759k43w7q	cmfl5ty0b000qcf87ghrqluj7	1kg 
cmhz9zwxc0005g2t07l6u8wda	Tambadiang pounè	Tambadiang pounè de bon qualité	1000	100	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1763150017/produits/yhft1gocdew0i07kyksq.jpg	DISPONIBLE	2025-11-14 19:53:38.16	2025-11-14 19:53:38.16	cmfkg9z7s000jcf8759k43w7q	cmfl5ty0b000qcf87ghrqluj7	1kg 
cmfp6v3q70001114mbb50xybe	Couscous riz	Après décorticage vanange et lavage mouture malaxage passer à la vapeur pour cuisson séchage	600	14	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758186527/produits/dbzkx0z3ehqloswc70h9.jpg	DISPONIBLE	2025-09-18 09:08:48.403	2026-04-27 17:13:38.254	cmfkfnxs20009cf8717gfp0k7	cmfo4oate000983na296x7yxp	500g
cmfuyhfu8000fkux8m2uu8ml1	Yaboy 4m	Poisson pêche du jour	2000	19	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758535250/produits/clo8dejej1r3rugasceq.jpg	DISPONIBLE	2025-09-22 10:00:51.056	2025-11-03 12:41:49.557	cmfkfslzz000bcf87s2cnrd83	cmfl5ty0b000qcf87ghrqluj7	Caisse de 20kg
cmhz9ntfa0001g2t07edxbltu	Kèthiakh	Kèthiakh de bon qualité  et 100% naturel	1500	100	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1763149453/produits/hx8jhyr0o1h6uh8d8er5.jpg	DISPONIBLE	2025-11-14 19:44:13.745	2025-11-14 19:44:13.745	cmfkg9z7s000jcf8759k43w7q	cmfl5ty0b000qcf87ghrqluj7	1kg 
cmfmv8y6c000dvyynn5lqsl5c	Guedjou yass	Guedjou yass produit frais transformé et séché de très bonnes qualités hygiéniques	10000	20	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758204428/produits/swozmidmdgwlrniepqgu.jpg	DISPONIBLE	2025-09-16 18:08:06.661	2025-09-18 14:07:08.592	cmfkfslzz000bcf87s2cnrd83	cmfl5ty0b000qcf87ghrqluj7	2 kg
cmflguxhl0015cf87pe0726u6	Eau de javel Jigeenu Wallu Ndar	Eau de Javel – GIE Jigeenu Wallu Ndar\nUne solution désinfectante efficace pour un nettoyage sûr et hygiénique. Idéale pour blanchir le linge, assainir les sols, surfaces et sanitaires, elle élimine rapidement microbes, bactéries et mauvaises odeurs. Fabriquée localement avec soin, elle allie qualité et accessibilité pour l’entretien quotidien de votre maison.	400	100	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758206789/produits/wiktniu6isjaimioe4fq.jpg	DISPONIBLE	2025-09-15 18:37:31.786	2025-09-18 14:46:30.114	cmfkgcmut000lcf87orydcwfl	cmfl6f7pc000tcf87it6wjrod	1l
cmfoi3op4001d83najxnwuwfo	Maïs ,riz	Ces produits sont fait à base de riz et de Maïs	600	17	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1758144937/produits/tbakwqphp9yor98mkngb.jpg	DISPONIBLE	2025-09-17 21:35:38.441	2026-03-04 13:04:19.084	cmfkg4y65000hcf87yy7xlw3q	cmfo4oate000983na296x7yxp	100g
cmohgeasz0001mfrkyh52n1n4	bouye	bon	500	11	https://res.cloudinary.com/dtpvh5zrk/image/upload/v1777309851/produits/rlfrsthtyhy10p4ln9zv.jpg	DISPONIBLE	2026-04-27 17:10:52.212	2026-04-27 17:13:38.254	cmohgaamo0001110ujzht0qzx	cmfo4oate000983na296x7yxp	100g
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.regions (id, nom, description, "fraisLivraisonInterne", "fraisLivraisonExterne", "createdAt", "updatedAt") FROM stdin;
reg_1757710881838_awx18vo0h	Mbour	Région de Mbour	500	500	2025-09-12 21:01:21.839	2025-09-12 21:01:21.838
reg_1757710880768_uroj9fa2l	Dakar	Région de Dakar	1000	1000	2025-09-12 21:01:20.77	2025-09-12 21:01:20.768
reg_1757710881371_4bajg0kuv	Saint-Louis	Région de Saint-Louis	1000	500	2025-09-12 21:01:21.372	2025-09-12 21:01:21.371
\.


--
-- Name: Avite_siteWeb Avite_siteWeb_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Avite_siteWeb"
    ADD CONSTRAINT "Avite_siteWeb_pkey" PRIMARY KEY (id);


--
-- Name: administrateurs administrateurs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.administrateurs
    ADD CONSTRAINT administrateurs_pkey PRIMARY KEY (id);


--
-- Name: adresses adresses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.adresses
    ADD CONSTRAINT adresses_pkey PRIMARY KEY (id);


--
-- Name: avis_produit avis_produit_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avis_produit
    ADD CONSTRAINT avis_produit_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- Name: commandes commandes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commandes
    ADD CONSTRAINT commandes_pkey PRIMARY KEY (id);


--
-- Name: gies gies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gies
    ADD CONSTRAINT gies_pkey PRIMARY KEY (id);


--
-- Name: livreurs livreurs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.livreurs
    ADD CONSTRAINT livreurs_pkey PRIMARY KEY (id);


--
-- Name: paiements paiements_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.paiements
    ADD CONSTRAINT paiements_pkey PRIMARY KEY (id);


--
-- Name: panier_produits panier_produits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.panier_produits
    ADD CONSTRAINT panier_produits_pkey PRIMARY KEY (id);


--
-- Name: produits produits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produits
    ADD CONSTRAINT produits_pkey PRIMARY KEY (id);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (id);


--
-- Name: administrateurs_email_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX administrateurs_email_key ON public.administrateurs USING btree (email);


--
-- Name: categories_nom_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX categories_nom_key ON public.categories USING btree (nom);


--
-- Name: clients_email_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX clients_email_key ON public.clients USING btree (email);


--
-- Name: commandes_numero_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX commandes_numero_key ON public.commandes USING btree (numero);


--
-- Name: gies_telephone_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX gies_telephone_key ON public.gies USING btree (telephone);


--
-- Name: idx_avis_gie_client; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_avis_gie_client ON public."Avite_siteWeb" USING btree ("clientId");


--
-- Name: idx_avis_produit_client; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_avis_produit_client ON public.avis_produit USING btree ("clientId");


--
-- Name: idx_avis_produit_produit; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_avis_produit_produit ON public.avis_produit USING btree ("produitId");


--
-- Name: idx_panier_produits_gie_statut; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_panier_produits_gie_statut ON public.panier_produits USING btree ("produitId", "statutGIE");


--
-- Name: idx_panier_produits_statut_gie; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX idx_panier_produits_statut_gie ON public.panier_produits USING btree ("statutGIE");


--
-- Name: livreurs_email_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX livreurs_email_key ON public.livreurs USING btree (email);


--
-- Name: paiements_commandeId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "paiements_commandeId_key" ON public.paiements USING btree ("commandeId");


--
-- Name: paiements_reference_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX paiements_reference_key ON public.paiements USING btree (reference);


--
-- Name: panier_produits_commandeId_produitId_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "panier_produits_commandeId_produitId_key" ON public.panier_produits USING btree ("commandeId", "produitId");


--
-- Name: regions_nom_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX regions_nom_key ON public.regions USING btree (nom);


--
-- Name: Avite_siteWeb Avite_siteWeb_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Avite_siteWeb"
    ADD CONSTRAINT "Avite_siteWeb_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: adresses adresses_regionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.adresses
    ADD CONSTRAINT "adresses_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES public.regions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: avis_produit avis_produit_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avis_produit
    ADD CONSTRAINT "avis_produit_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: avis_produit avis_produit_produitId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avis_produit
    ADD CONSTRAINT "avis_produit_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES public.produits(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: clients clients_administrateurId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT "clients_administrateurId_fkey" FOREIGN KEY ("administrateurId") REFERENCES public.administrateurs(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: commandes commandes_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commandes
    ADD CONSTRAINT "commandes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: commandes commandes_livreurId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commandes
    ADD CONSTRAINT "commandes_livreurId_fkey" FOREIGN KEY ("livreurId") REFERENCES public.livreurs(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: commandes commandes_regionLivraisonId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.commandes
    ADD CONSTRAINT "commandes_regionLivraisonId_fkey" FOREIGN KEY ("regionLivraisonId") REFERENCES public.regions(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: gies gies_administrateurId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gies
    ADD CONSTRAINT "gies_administrateurId_fkey" FOREIGN KEY ("administrateurId") REFERENCES public.administrateurs(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: gies gies_regionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.gies
    ADD CONSTRAINT "gies_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES public.regions(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: livreurs livreurs_regionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.livreurs
    ADD CONSTRAINT "livreurs_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES public.regions(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: paiements paiements_commandeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.paiements
    ADD CONSTRAINT "paiements_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES public.commandes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: panier_produits panier_produits_commandeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.panier_produits
    ADD CONSTRAINT "panier_produits_commandeId_fkey" FOREIGN KEY ("commandeId") REFERENCES public.commandes(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: panier_produits panier_produits_produitId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.panier_produits
    ADD CONSTRAINT "panier_produits_produitId_fkey" FOREIGN KEY ("produitId") REFERENCES public.produits(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: produits produits_categorieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produits
    ADD CONSTRAINT "produits_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: produits produits_gieId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produits
    ADD CONSTRAINT "produits_gieId_fkey" FOREIGN KEY ("gieId") REFERENCES public.gies(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict D0QVfTV7OLqyizj1CAWkaxkGewOnmRdM9eQVgWCXFyIB0vnmKWwwTLxZmxcKeQ0

