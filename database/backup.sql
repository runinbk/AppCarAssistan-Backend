PGDMP     4                
    {            AppCarAssistan-DB    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    114702    AppCarAssistan-DB    DATABASE     �   CREATE DATABASE "AppCarAssistan-DB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
 #   DROP DATABASE "AppCarAssistan-DB";
                postgres    false            �            1259    114796 
   asistencia    TABLE     �  CREATE TABLE public.asistencia (
    id integer NOT NULL,
    id_usuario integer NOT NULL,
    id_tecnico integer NOT NULL,
    id_servicio integer NOT NULL,
    id_taller integer NOT NULL,
    ubicacion point NOT NULL,
    str_ruta character varying,
    costo integer,
    pago_targeta boolean,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    state_verif boolean DEFAULT false
);
    DROP TABLE public.asistencia;
       public         heap    postgres    false            �            1259    114791    asistencia_id_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencia_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.asistencia_id_seq;
       public          postgres    false    237            �           0    0    asistencia_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.asistencia_id_seq OWNED BY public.asistencia.id;
          public          postgres    false    232            �            1259    114794    asistencia_id_servicio_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencia_id_servicio_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.asistencia_id_servicio_seq;
       public          postgres    false    237            �           0    0    asistencia_id_servicio_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.asistencia_id_servicio_seq OWNED BY public.asistencia.id_servicio;
          public          postgres    false    235            �            1259    114795    asistencia_id_taller_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencia_id_taller_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.asistencia_id_taller_seq;
       public          postgres    false    237            �           0    0    asistencia_id_taller_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.asistencia_id_taller_seq OWNED BY public.asistencia.id_taller;
          public          postgres    false    236            �            1259    114793    asistencia_id_tecnico_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencia_id_tecnico_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.asistencia_id_tecnico_seq;
       public          postgres    false    237            �           0    0    asistencia_id_tecnico_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.asistencia_id_tecnico_seq OWNED BY public.asistencia.id_tecnico;
          public          postgres    false    234            �            1259    114792    asistencia_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.asistencia_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.asistencia_id_usuario_seq;
       public          postgres    false    237            �           0    0    asistencia_id_usuario_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.asistencia_id_usuario_seq OWNED BY public.asistencia.id_usuario;
          public          postgres    false    233            �            1259    114893    img    TABLE     �   CREATE TABLE public.img (
    id integer NOT NULL,
    img character varying NOT NULL,
    id_asistencia integer NOT NULL,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.img;
       public         heap    postgres    false            �            1259    114892    img_id_asistencia_seq    SEQUENCE     �   CREATE SEQUENCE public.img_id_asistencia_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.img_id_asistencia_seq;
       public          postgres    false    240            �           0    0    img_id_asistencia_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.img_id_asistencia_seq OWNED BY public.img.id_asistencia;
          public          postgres    false    239            �            1259    114891 
   img_id_seq    SEQUENCE     �   CREATE SEQUENCE public.img_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.img_id_seq;
       public          postgres    false    240            �           0    0 
   img_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.img_id_seq OWNED BY public.img.id;
          public          postgres    false    238            �            1259    114704    rol    TABLE     �   CREATE TABLE public.rol (
    id integer NOT NULL,
    rol character varying(10) NOT NULL,
    descripcion character varying(70),
    state boolean DEFAULT true,
    "updatedAt" timestamp with time zone,
    "createdAt" timestamp with time zone
);
    DROP TABLE public.rol;
       public         heap    postgres    false            �            1259    114703 
   rol_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rol_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.rol_id_seq;
       public          postgres    false    215            �           0    0 
   rol_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.rol_id_seq OWNED BY public.rol.id;
          public          postgres    false    214            �            1259    114712    servicio    TABLE     6  CREATE TABLE public.servicio (
    id integer NOT NULL,
    servicio character varying(30) NOT NULL,
    descripcion character varying(70),
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    id_taller integer NOT NULL,
    precio integer
);
    DROP TABLE public.servicio;
       public         heap    postgres    false            �            1259    114711    servicio_id_seq    SEQUENCE     �   CREATE SEQUENCE public.servicio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.servicio_id_seq;
       public          postgres    false    217            �           0    0    servicio_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.servicio_id_seq OWNED BY public.servicio.id;
          public          postgres    false    216            �            1259    114766    servicio_id_taller_seq    SEQUENCE     �   CREATE SEQUENCE public.servicio_id_taller_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.servicio_id_taller_seq;
       public          postgres    false    217            �           0    0    servicio_id_taller_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.servicio_id_taller_seq OWNED BY public.servicio.id_taller;
          public          postgres    false    227            �            1259    114753    taller    TABLE       CREATE TABLE public.taller (
    id integer NOT NULL,
    nombre character varying(30) NOT NULL,
    ubicacion point NOT NULL,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    id_usuario integer NOT NULL
);
    DROP TABLE public.taller;
       public         heap    postgres    false            �            1259    114751    taller_id_seq    SEQUENCE     �   CREATE SEQUENCE public.taller_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.taller_id_seq;
       public          postgres    false    226            �           0    0    taller_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.taller_id_seq OWNED BY public.taller.id;
          public          postgres    false    224            �            1259    114752    taller_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.taller_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.taller_id_usuario_seq;
       public          postgres    false    226            �           0    0    taller_id_usuario_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.taller_id_usuario_seq OWNED BY public.taller.id_usuario;
          public          postgres    false    225            �            1259    114911    targeta    TABLE     ,  CREATE TABLE public.targeta (
    id integer NOT NULL,
    numero integer NOT NULL,
    fecha_ven date NOT NULL,
    cvs character varying NOT NULL,
    id_usuario integer NOT NULL,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.targeta;
       public         heap    postgres    false            �            1259    114909    targeta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.targeta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.targeta_id_seq;
       public          postgres    false    243            �           0    0    targeta_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.targeta_id_seq OWNED BY public.targeta.id;
          public          postgres    false    241            �            1259    114910    targeta_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.targeta_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.targeta_id_usuario_seq;
       public          postgres    false    243            �           0    0    targeta_id_usuario_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.targeta_id_usuario_seq OWNED BY public.targeta.id_usuario;
          public          postgres    false    242            �            1259    114782    tecnicos    TABLE     V  CREATE TABLE public.tecnicos (
    id integer NOT NULL,
    sueldo integer NOT NULL,
    hora_ini time without time zone,
    hora_fin time without time zone,
    id_usuario integer NOT NULL,
    id_taller integer NOT NULL,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone
);
    DROP TABLE public.tecnicos;
       public         heap    postgres    false            �            1259    114779    tecnicos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tecnicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.tecnicos_id_seq;
       public          postgres    false    231            �           0    0    tecnicos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.tecnicos_id_seq OWNED BY public.tecnicos.id;
          public          postgres    false    228            �            1259    114781    tecnicos_id_taller_seq    SEQUENCE     �   CREATE SEQUENCE public.tecnicos_id_taller_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.tecnicos_id_taller_seq;
       public          postgres    false    231            �           0    0    tecnicos_id_taller_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.tecnicos_id_taller_seq OWNED BY public.tecnicos.id_taller;
          public          postgres    false    230            �            1259    114780    tecnicos_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.tecnicos_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.tecnicos_id_usuario_seq;
       public          postgres    false    231            �           0    0    tecnicos_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.tecnicos_id_usuario_seq OWNED BY public.tecnicos.id_usuario;
          public          postgres    false    229            �            1259    114721    usuario    TABLE     �  CREATE TABLE public.usuario (
    id integer NOT NULL,
    correo character varying(20) NOT NULL,
    password character varying NOT NULL,
    nombre character varying(50),
    calular integer,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    id_rol integer NOT NULL,
    img character varying,
    fecha_nac date
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            �            1259    114720    usuario_id_rol_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_rol_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.usuario_id_rol_seq;
       public          postgres    false    220            �           0    0    usuario_id_rol_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.usuario_id_rol_seq OWNED BY public.usuario.id_rol;
          public          postgres    false    219            �            1259    114719    usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.usuario_id_seq;
       public          postgres    false    220            �           0    0    usuario_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;
          public          postgres    false    218            �            1259    114738    vehiculo    TABLE     �  CREATE TABLE public.vehiculo (
    id integer NOT NULL,
    placa integer NOT NULL,
    anio integer NOT NULL,
    modelo character varying(20) NOT NULL,
    marca character varying(20) NOT NULL,
    color character varying(20),
    id_usuario integer NOT NULL,
    state boolean DEFAULT true,
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    img character varying
);
    DROP TABLE public.vehiculo;
       public         heap    postgres    false            �            1259    114736    vehiculo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vehiculo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vehiculo_id_seq;
       public          postgres    false    223            �           0    0    vehiculo_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vehiculo_id_seq OWNED BY public.vehiculo.id;
          public          postgres    false    221            �            1259    114737    vehiculo_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.vehiculo_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.vehiculo_id_usuario_seq;
       public          postgres    false    223            �           0    0    vehiculo_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.vehiculo_id_usuario_seq OWNED BY public.vehiculo.id_usuario;
          public          postgres    false    222            �           2604    114799    asistencia id    DEFAULT     n   ALTER TABLE ONLY public.asistencia ALTER COLUMN id SET DEFAULT nextval('public.asistencia_id_seq'::regclass);
 <   ALTER TABLE public.asistencia ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    237    237            �           2604    114800    asistencia id_usuario    DEFAULT     ~   ALTER TABLE ONLY public.asistencia ALTER COLUMN id_usuario SET DEFAULT nextval('public.asistencia_id_usuario_seq'::regclass);
 D   ALTER TABLE public.asistencia ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    233    237    237            �           2604    114801    asistencia id_tecnico    DEFAULT     ~   ALTER TABLE ONLY public.asistencia ALTER COLUMN id_tecnico SET DEFAULT nextval('public.asistencia_id_tecnico_seq'::regclass);
 D   ALTER TABLE public.asistencia ALTER COLUMN id_tecnico DROP DEFAULT;
       public          postgres    false    237    234    237            �           2604    114802    asistencia id_servicio    DEFAULT     �   ALTER TABLE ONLY public.asistencia ALTER COLUMN id_servicio SET DEFAULT nextval('public.asistencia_id_servicio_seq'::regclass);
 E   ALTER TABLE public.asistencia ALTER COLUMN id_servicio DROP DEFAULT;
       public          postgres    false    235    237    237            �           2604    114803    asistencia id_taller    DEFAULT     |   ALTER TABLE ONLY public.asistencia ALTER COLUMN id_taller SET DEFAULT nextval('public.asistencia_id_taller_seq'::regclass);
 C   ALTER TABLE public.asistencia ALTER COLUMN id_taller DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    114896    img id    DEFAULT     `   ALTER TABLE ONLY public.img ALTER COLUMN id SET DEFAULT nextval('public.img_id_seq'::regclass);
 5   ALTER TABLE public.img ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    240    238    240            �           2604    114897    img id_asistencia    DEFAULT     v   ALTER TABLE ONLY public.img ALTER COLUMN id_asistencia SET DEFAULT nextval('public.img_id_asistencia_seq'::regclass);
 @   ALTER TABLE public.img ALTER COLUMN id_asistencia DROP DEFAULT;
       public          postgres    false    239    240    240            �           2604    114707    rol id    DEFAULT     `   ALTER TABLE ONLY public.rol ALTER COLUMN id SET DEFAULT nextval('public.rol_id_seq'::regclass);
 5   ALTER TABLE public.rol ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    114715    servicio id    DEFAULT     j   ALTER TABLE ONLY public.servicio ALTER COLUMN id SET DEFAULT nextval('public.servicio_id_seq'::regclass);
 :   ALTER TABLE public.servicio ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    114767    servicio id_taller    DEFAULT     x   ALTER TABLE ONLY public.servicio ALTER COLUMN id_taller SET DEFAULT nextval('public.servicio_id_taller_seq'::regclass);
 A   ALTER TABLE public.servicio ALTER COLUMN id_taller DROP DEFAULT;
       public          postgres    false    227    217            �           2604    114756 	   taller id    DEFAULT     f   ALTER TABLE ONLY public.taller ALTER COLUMN id SET DEFAULT nextval('public.taller_id_seq'::regclass);
 8   ALTER TABLE public.taller ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    226    226            �           2604    114758    taller id_usuario    DEFAULT     v   ALTER TABLE ONLY public.taller ALTER COLUMN id_usuario SET DEFAULT nextval('public.taller_id_usuario_seq'::regclass);
 @   ALTER TABLE public.taller ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    114914 
   targeta id    DEFAULT     h   ALTER TABLE ONLY public.targeta ALTER COLUMN id SET DEFAULT nextval('public.targeta_id_seq'::regclass);
 9   ALTER TABLE public.targeta ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    243    241    243            �           2604    114915    targeta id_usuario    DEFAULT     x   ALTER TABLE ONLY public.targeta ALTER COLUMN id_usuario SET DEFAULT nextval('public.targeta_id_usuario_seq'::regclass);
 A   ALTER TABLE public.targeta ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    242    243    243            �           2604    114785    tecnicos id    DEFAULT     j   ALTER TABLE ONLY public.tecnicos ALTER COLUMN id SET DEFAULT nextval('public.tecnicos_id_seq'::regclass);
 :   ALTER TABLE public.tecnicos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    228    231            �           2604    114786    tecnicos id_usuario    DEFAULT     z   ALTER TABLE ONLY public.tecnicos ALTER COLUMN id_usuario SET DEFAULT nextval('public.tecnicos_id_usuario_seq'::regclass);
 B   ALTER TABLE public.tecnicos ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    229    231    231            �           2604    114787    tecnicos id_taller    DEFAULT     x   ALTER TABLE ONLY public.tecnicos ALTER COLUMN id_taller SET DEFAULT nextval('public.tecnicos_id_taller_seq'::regclass);
 A   ALTER TABLE public.tecnicos ALTER COLUMN id_taller DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    114724 
   usuario id    DEFAULT     h   ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);
 9   ALTER TABLE public.usuario ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    220    220            �           2604    114726    usuario id_rol    DEFAULT     p   ALTER TABLE ONLY public.usuario ALTER COLUMN id_rol SET DEFAULT nextval('public.usuario_id_rol_seq'::regclass);
 =   ALTER TABLE public.usuario ALTER COLUMN id_rol DROP DEFAULT;
       public          postgres    false    220    219    220            �           2604    114741    vehiculo id    DEFAULT     j   ALTER TABLE ONLY public.vehiculo ALTER COLUMN id SET DEFAULT nextval('public.vehiculo_id_seq'::regclass);
 :   ALTER TABLE public.vehiculo ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    221    223            �           2604    114742    vehiculo id_usuario    DEFAULT     z   ALTER TABLE ONLY public.vehiculo ALTER COLUMN id_usuario SET DEFAULT nextval('public.vehiculo_id_usuario_seq'::regclass);
 B   ALTER TABLE public.vehiculo ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    223    222    223            {          0    114796 
   asistencia 
   TABLE DATA           �   COPY public.asistencia (id, id_usuario, id_tecnico, id_servicio, id_taller, ubicacion, str_ruta, costo, pago_targeta, state, "createdAt", "updatedAt", state_verif) FROM stdin;
    public          postgres    false    237   5�       ~          0    114893    img 
   TABLE DATA           V   COPY public.img (id, img, id_asistencia, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    240   R�       e          0    114704    rol 
   TABLE DATA           T   COPY public.rol (id, rol, descripcion, state, "updatedAt", "createdAt") FROM stdin;
    public          postgres    false    215   o�       g          0    114712    servicio 
   TABLE DATA           q   COPY public.servicio (id, servicio, descripcion, state, "createdAt", "updatedAt", id_taller, precio) FROM stdin;
    public          postgres    false    217   ��       p          0    114753    taller 
   TABLE DATA           d   COPY public.taller (id, nombre, ubicacion, state, "createdAt", "updatedAt", id_usuario) FROM stdin;
    public          postgres    false    226   �       �          0    114911    targeta 
   TABLE DATA           j   COPY public.targeta (id, numero, fecha_ven, cvs, id_usuario, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    243   1�       u          0    114782    tecnicos 
   TABLE DATA           z   COPY public.tecnicos (id, sueldo, hora_ini, hora_fin, id_usuario, id_taller, state, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    231   N�       j          0    114721    usuario 
   TABLE DATA           �   COPY public.usuario (id, correo, password, nombre, calular, state, "createdAt", "updatedAt", id_rol, img, fecha_nac) FROM stdin;
    public          postgres    false    220   k�       m          0    114738    vehiculo 
   TABLE DATA           {   COPY public.vehiculo (id, placa, anio, modelo, marca, color, id_usuario, state, "createdAt", "updatedAt", img) FROM stdin;
    public          postgres    false    223   ��       �           0    0    asistencia_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.asistencia_id_seq', 1, false);
          public          postgres    false    232            �           0    0    asistencia_id_servicio_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.asistencia_id_servicio_seq', 1, false);
          public          postgres    false    235            �           0    0    asistencia_id_taller_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.asistencia_id_taller_seq', 1, false);
          public          postgres    false    236            �           0    0    asistencia_id_tecnico_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.asistencia_id_tecnico_seq', 1, false);
          public          postgres    false    234            �           0    0    asistencia_id_usuario_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.asistencia_id_usuario_seq', 1, false);
          public          postgres    false    233            �           0    0    img_id_asistencia_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.img_id_asistencia_seq', 1, false);
          public          postgres    false    239            �           0    0 
   img_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.img_id_seq', 1, false);
          public          postgres    false    238            �           0    0 
   rol_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('public.rol_id_seq', 1, true);
          public          postgres    false    214            �           0    0    servicio_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.servicio_id_seq', 1, false);
          public          postgres    false    216            �           0    0    servicio_id_taller_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.servicio_id_taller_seq', 1, false);
          public          postgres    false    227            �           0    0    taller_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.taller_id_seq', 1, false);
          public          postgres    false    224            �           0    0    taller_id_usuario_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.taller_id_usuario_seq', 1, false);
          public          postgres    false    225            �           0    0    targeta_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.targeta_id_seq', 1, false);
          public          postgres    false    241            �           0    0    targeta_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.targeta_id_usuario_seq', 1, false);
          public          postgres    false    242            �           0    0    tecnicos_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.tecnicos_id_seq', 1, false);
          public          postgres    false    228            �           0    0    tecnicos_id_taller_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.tecnicos_id_taller_seq', 1, false);
          public          postgres    false    230            �           0    0    tecnicos_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.tecnicos_id_usuario_seq', 1, false);
          public          postgres    false    229            �           0    0    usuario_id_rol_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.usuario_id_rol_seq', 1, false);
          public          postgres    false    219            �           0    0    usuario_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuario_id_seq', 1, false);
          public          postgres    false    218            �           0    0    vehiculo_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vehiculo_id_seq', 1, false);
          public          postgres    false    221            �           0    0    vehiculo_id_usuario_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.vehiculo_id_usuario_seq', 1, false);
          public          postgres    false    222            �           2606    114870    asistencia pk_asistencia 
   CONSTRAINT     V   ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT pk_asistencia PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.asistencia DROP CONSTRAINT pk_asistencia;
       public            postgres    false    237            �           2606    114902 
   img pk_img 
   CONSTRAINT     H   ALTER TABLE ONLY public.img
    ADD CONSTRAINT pk_img PRIMARY KEY (id);
 4   ALTER TABLE ONLY public.img DROP CONSTRAINT pk_img;
       public            postgres    false    240            �           2606    114710 
   rol pk_rol 
   CONSTRAINT     H   ALTER TABLE ONLY public.rol
    ADD CONSTRAINT pk_rol PRIMARY KEY (id);
 4   ALTER TABLE ONLY public.rol DROP CONSTRAINT pk_rol;
       public            postgres    false    215            �           2606    114773    servicio pk_servicio 
   CONSTRAINT     R   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT pk_servicio PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.servicio DROP CONSTRAINT pk_servicio;
       public            postgres    false    217            �           2606    114760    taller pk_taller 
   CONSTRAINT     N   ALTER TABLE ONLY public.taller
    ADD CONSTRAINT pk_taller PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.taller DROP CONSTRAINT pk_taller;
       public            postgres    false    226            �           2606    114920    targeta pk_targeta 
   CONSTRAINT     P   ALTER TABLE ONLY public.targeta
    ADD CONSTRAINT pk_targeta PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.targeta DROP CONSTRAINT pk_targeta;
       public            postgres    false    243            �           2606    114858    tecnicos pk_tecnicos 
   CONSTRAINT     R   ALTER TABLE ONLY public.tecnicos
    ADD CONSTRAINT pk_tecnicos PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.tecnicos DROP CONSTRAINT pk_tecnicos;
       public            postgres    false    231            �           2606    114730    usuario pk_usuario 
   CONSTRAINT     P   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.usuario DROP CONSTRAINT pk_usuario;
       public            postgres    false    220            �           2606    114745    vehiculo pk_vehiculo 
   CONSTRAINT     R   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT pk_vehiculo PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT pk_vehiculo;
       public            postgres    false    223            �           2606    114903    img fk_asistencia    FK CONSTRAINT     {   ALTER TABLE ONLY public.img
    ADD CONSTRAINT fk_asistencia FOREIGN KEY (id_asistencia) REFERENCES public.asistencia(id);
 ;   ALTER TABLE ONLY public.img DROP CONSTRAINT fk_asistencia;
       public          postgres    false    240    3269    237            �           2606    114731    usuario fk_rol    FK CONSTRAINT     j   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT fk_rol FOREIGN KEY (id_rol) REFERENCES public.rol(id);
 8   ALTER TABLE ONLY public.usuario DROP CONSTRAINT fk_rol;
       public          postgres    false    215    220    3257            �           2606    114876    asistencia fk_servicio    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_servicio FOREIGN KEY (id_servicio) REFERENCES public.servicio(id) NOT VALID;
 @   ALTER TABLE ONLY public.asistencia DROP CONSTRAINT fk_servicio;
       public          postgres    false    237    217    3259            �           2606    114774    servicio fk_taller    FK CONSTRAINT     ~   ALTER TABLE ONLY public.servicio
    ADD CONSTRAINT fk_taller FOREIGN KEY (id_taller) REFERENCES public.taller(id) NOT VALID;
 <   ALTER TABLE ONLY public.servicio DROP CONSTRAINT fk_taller;
       public          postgres    false    217    226    3265            �           2606    114864    tecnicos fk_taller    FK CONSTRAINT     ~   ALTER TABLE ONLY public.tecnicos
    ADD CONSTRAINT fk_taller FOREIGN KEY (id_taller) REFERENCES public.taller(id) NOT VALID;
 <   ALTER TABLE ONLY public.tecnicos DROP CONSTRAINT fk_taller;
       public          postgres    false    231    3265    226            �           2606    114886    asistencia fk_taller    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_taller FOREIGN KEY (id_taller) REFERENCES public.taller(id) NOT VALID;
 >   ALTER TABLE ONLY public.asistencia DROP CONSTRAINT fk_taller;
       public          postgres    false    3265    226    237            �           2606    114881    asistencia fk_tecnico    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_tecnico FOREIGN KEY (id_tecnico) REFERENCES public.tecnicos(id) NOT VALID;
 ?   ALTER TABLE ONLY public.asistencia DROP CONSTRAINT fk_tecnico;
       public          postgres    false    3267    237    231            �           2606    114746    vehiculo fk_usuario    FK CONSTRAINT     w   ALTER TABLE ONLY public.vehiculo
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);
 =   ALTER TABLE ONLY public.vehiculo DROP CONSTRAINT fk_usuario;
       public          postgres    false    223    3261    220            �           2606    114761    taller fk_usuario    FK CONSTRAINT     u   ALTER TABLE ONLY public.taller
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);
 ;   ALTER TABLE ONLY public.taller DROP CONSTRAINT fk_usuario;
       public          postgres    false    226    3261    220            �           2606    114859    tecnicos fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.tecnicos
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id) NOT VALID;
 =   ALTER TABLE ONLY public.tecnicos DROP CONSTRAINT fk_usuario;
       public          postgres    false    3261    231    220            �           2606    114871    asistencia fk_usuario    FK CONSTRAINT     �   ALTER TABLE ONLY public.asistencia
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id) NOT VALID;
 ?   ALTER TABLE ONLY public.asistencia DROP CONSTRAINT fk_usuario;
       public          postgres    false    3261    237    220            �           2606    114921    targeta fk_usuario    FK CONSTRAINT     v   ALTER TABLE ONLY public.targeta
    ADD CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES public.usuario(id);
 <   ALTER TABLE ONLY public.targeta DROP CONSTRAINT fk_usuario;
       public          postgres    false    220    3261    243            {      x������ � �      ~      x������ � �      e   x   x�]�1!@�N1�0�n�n=���$x~��~�>����?E�0�>#W����j31�Y���`���Y��\�5�Ma�u
Q�p΅�kc�2����ӗɗ�R� i�%�      g      x������ � �      p      x������ � �      �      x������ � �      u      x������ � �      j      x������ � �      m      x������ � �     