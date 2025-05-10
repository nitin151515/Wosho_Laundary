
        const services = {
            "Wash & Iron": {
                "Casual Wear": {
                    "T-Shirt": { price: "₹50", image: "image/casual shirt.avif" },
                    "Casual Shirt": { price: "₹60", image: "image/formal shirt.avif" },
                    "Jeans": { price: "₹80", image: "image/jeans.avif" },
                    "Shorts": { price: "₹50", image: "image/shorts.avif" },
                    "Track Pants": { price: "₹70", image: "image/track pants.avif" },
                    "Hoodie": { price: "₹120", image: "image/hoodie.avif" },
                    "Sweatshirt": { price: "₹100", image: "image/sweat shirt.avif" }
                },
                "Formal Wear": {
                    "Formal Shirt": { price: "₹80", image: "image/formal shirt.avif" },
                    "Dress Pants": { price: "₹100", image: "image/formal pants.avif" },
                    "Blazer": { price: "₹200", image: "image/Blazer.avif" },
                    "Suit (2-Piece)": { price: "₹350", image: "image/Suit 2piece.avif" },
                    "Tie": { price: "₹40", image: "image/tie.avif" },
                    "Formal Skirt": { price: "₹120", image: "image/skirt.avif" }
                },
                "Woolen": {
                    "Woolen Sweater": { price: "₹180", image: "image/woolen sweater.avif" },
                    "Woolen Shawl": { price: "₹120", image: "image/woolen shawl.jpg" },
                    "Woolen Scarf": { price: "₹100", image: "image/woolen scarf.avif" },
                    "Woolen Jacket": { price: "₹250", image: "image/woolen jacket.avif" },
                    "Woolen Coat": { price: "₹300", image: "image/woolen coat.jpg" }
                },
                "Special Fabric": {
                    "Silk Shirt/Blouse": { price: "₹150", image: "image/formal shirt.avif" },
                    "Silk Saree": { price: "₹250", image: "image/saree.avif" },
                    "Linen Shirt": { price: "₹130", image: "image/formal shirt.avif" },
                    "Linen Dress": { price: "₹200", image: "image/linen dress.avif" },
                    "Velvet Jacket": { price: "₹250", image: "image/valvet jacket.avif" },
                    "Velvet Blazer": { price: "₹280", image: "image/Blazer.avif" },
                    "Chiffon Dress": { price: "₹180", image: "image/chiffon dress.avif" }
                }
            },
            "Dry Cleaning": {
                "Regular Apparel": {
                    "Shirt (Casual/Formal)": { price: "₹100", image: "image/formal shirt.avif" },
                    "Trousers/Pants": { price: "₹120", image: "image/formal pants.avif" },
                    "Jeans": { price: "₹150", image: "image/jeans.avif" },
                    "T-Shirt": { price: "₹80", image: "image/t shirt.avif" },
                    "Blouse": { price: "₹110", image: "image/blouse.avif" },
                    "Skirt": { price: "₹100", image: "image/skirt.avif" },
                    "Dress (Casual)": { price: "₹180", image: "image/t shirt.avif" },
                    "Jacket (Regular)": { price: "₹200", image: "image/valvet jacket.avif" },
                    "Sweater (Non-Woolen)": { price: "₹150", image: "image/woolen sweater.avif" },
                    "Suit (2-Piece)": { price: "₹350", image: "image/suit 2piece.avif" },
                    "Blazer": { price: "₹250", image: "image/Blazer.avif" }
                },
                "Wedding Wear": {
                    "Wedding Gown (Simple)": { price: "₹800", image: "image/lehenga.avif" },
                    "Wedding Gown (Heavy)": { price: "₹1200", image: "image/lehenga.avif" },
                    "Sherwani": { price: "₹600", image: "image/sherwani.avif" },
                    "Lehenga (Light)": { price: "₹700", image: "image/lehenga.avif" },
                    "Lehenga (Heavy Embroidery)": { price: "₹1100", image: "image/lehenga.avif" },
                    "Bridal Saree": { price: "₹900", image: "image/saree.avif" },
                    "Jodhpuri Suit": { price: "₹500", image: "image/suit 2piece.avif" },
                    "Wedding Blazer": { price: "₹400", image: "image/Blazer.avif" }
                },
                "Woolen": {
                    "Woolen Sweater": { price: "₹200", image: "image/woolen sweater.avif" },
                    "Woolen Coat": { price: "₹350", image: "image/woolen coat.jpg" },
                    "Woolen Shawl": { price: "₹150", image: "image/woolen shawl.jpg" },
                    "Woolen Scarf": { price: "₹120", image: "image/woolen scarf.avif" },
                    "Woolen Jacket": { price: "₹300", image: "image/valvet jacket.avif" },
                    "Woolen Blazer": { price: "₹400", image: "image/Blazer.avif" },
                    "Woolen Pants": { price: "₹250", image: "image/formal pants.avif" }
                },
                "Special Fabric (Silk)": {
                    "Silk Shirt": { price: "₹180", image: "image/formal shirt.avif" },
                    "Silk Blouse": { price: "₹200", image: "image/blouse.avif" },
                    "Silk Saree (Plain)": { price: "₹300", image: "image/saree.avif" },
                    "Silk Saree (Heavy Work)": { price: "₹450", image: "image/saree.avif" },
                    "Silk Dress": { price: "₹350", image: "image/chiffon dress.avif" },
                    "Silk Kurta": { price: "₹250", image: "image/kurta.avif" },
                    "Silk Scarf/Dupatta": { price: "₹150", image: "image/woolen scarf.avif" },
                    "Silk Nightgown": { price: "₹280", image: "image/night gown.avif" }
                }
            },
            "Ironing Only": {
                "Casual Wear": {
                    "T-Shirt": { price: "₹30", image: "image/t shirt.avif" },
                    "Casual Shirt": { price: "₹40", image: "image/casual shirt.avif" },
                    "Jeans": { price: "₹50", image: "image/jeans.avif" },
                    "Shorts": { price: "₹30", image: "image/shorts.avif" },
                    "Track Pants": { price: "₹40", image: "image/track pants.avif" },
                    "Hoodie": { price: "₹60", image: "image/hoodie.avif" }
                },
                "Formal Wear": {
                    "Formal Shirt": { price: "₹50", image: "image/formal shirt.avif" },
                    "Dress Pants": { price: "₹60", image: "image/formal pants.avif" },
                    "Blazer": { price: "₹100", image: "image/Blazer.avif" },
                    "Formal Skirt": { price: "₹60", image: "image/skirt.avif" },
                    "Tie": { price: "₹20", image: "image/tie.avif" },
                    "Waistcoat": { price: "₹70", image: "image/Blazr.avif" }
                },
                "Traditional Wear": {
                    "Kurta (Cotton)": { price: "₹60", image: "image/kurta.avif" },
                    "Kurta (Linen)": { price: "₹80", image: "image/kurta.avif" },
                    "Salwar": { price: "₹50", image: "" },
                    "Dhoti": { price: "₹70", image: "image/dhoti.avif" },
                    "Sherwani": { price: "₹150", image: "image/sherwani.avif" },
                    "Saree (Cotton)": { price: "₹80", image: "image/saree.avif" },
                    "Saree (Silk)": { price: "₹120", image: "image/saree.avif" }
                },
                "Home Textiles": {
                    "Bedsheet (Single)": { price: "₹50", image: "image/bedsheet.avif" },
                    "Bedsheet (Double)": { price: "₹80", image: "image/bedsheet.avif" },
                    "Pillow Cover": { price: "₹30", image: "image/pillowcover.avif" },
                    "Table Cloth": { price: "₹40", image: "image/tablecloth.avif" },
                    "Curtains (Small)": { price: "₹60", image: "image/curtains.avif" },
                    "Curtains (Large)": { price: "₹100", image: "image/curtains.avif" }
                },
                "Delicate Fabrics": {
                    "Silk Shirt/Blouse": { price: "₹80", image: "image/blouse.avif" },
                    "Linen Dress": { price: "₹100", image: "image/linen dress.avif" },
                    "Chiffon Saree": { price: "₹120", image: "image/saree.avif" },
                    "Velvet Jacket": { price: "₹150", image: "image/valvet jacket.avif" },
                    "Georgette Dupatta": { price: "₹60", image: "image/dupatta.avif" },
                    "Organza Dress": { price: "₹130", image: "image/linen dress.avif" }
                }
            },
            "Shoe Cleaning": {
                "Premium Shoe Care": {
                    "Leather Shoes": { price: "₹500", image: "image/lshoes.avif" },
                    "Sports/Canvas Shoes": { price: "₹300", image: "image/sshoes.avif" },
                    "Sandals": { price: "₹200", image: "image/sandals.avif" },
                    "Boots": { price: "₹500", image: "image/boots.avif" },
                    "Heels": { price: "₹300", image: "image/heels.avif" }
                }
            },
            "Heavy Items & Bags": {
                "Curtains & Drapes": {
                    "Small Blind Curtain (25 Sqft)": { price: "₹350", image: "image/curtains.avif" },
                    "Medium Blind Curtain (40 Sqft)": { price: "₹550", image: "image/curtains.avif" },
                    "Large Blind Curtain (90 Sqft)": { price: "₹950", image: "image/curtains.avif" },
                    "Small Curtain (25 Sqft)": { price: "₹200", image: "image/curtains.avif" },
                    "Medium Curtain (40 Sqft)": { price: "₹350", image: "image/curtains.avif" },
                    "Large Curtain (90 Sqft)": { price: "₹550", image: "image/curtains.avif" }
                },
                "Bedding & Linens": {
                    "Bed Spread (Single)": { price: "₹80", image: "image/bedsheet.avif" },
                    "Bed Spread (Double)": { price: "₹120", image: "image/bedsheet.avif" },
                    "Bed Sheet (Single)": { price: "₹100", image: "image/bedsheet.avif" },
                    "Bed Sheet (Double)": { price: "₹150", image: "image/bedsheet.avif" },
                    "Blanket (Single)": { price: "₹250", image: "image/blanket.avif" },
                    "Blanket (Double)": { price: "₹350", image: "image/blanket.avif" },
                    "Cushion Cover": { price: "₹80", image: "image/pillowcover.avif" },
                    "Pillow": { price: "₹150", image: "image/pillowcover.avif" },
                    "Pillow Cover": { price: "₹80", image: "image/pillowcover.avif" },
                    "Table Cloth": { price: "₹80", image: "image/tablecloth.avif" }
                },
                "Bag Cleaning": {
                    "Hand Bag": { price: "₹300", image: "image/handbag.avif" },
                    "Back Pack": { price: "₹400", image: "image/backup.avif" },
                    "Travel Bag": { price: "₹500", image: "image/travelbag.avif" },
                    "Laptop Bag": { price: "₹400", image: "image/laptopbag.avif" },
                    "Trolley Bag": { price: "₹600", image: "image/travelbag.avif" }
                }
            },
            "At-Home Service": {
                "Time Slots": {
                    "2 Hours Service": { price: "₹300", image: "image/4clock.avif" },
                    "4 Hours Service": { price: "₹500", image: "image/4clock.avif" },
                    "6 Hours Service": { price: "₹800", image: "image/4clock.avif" }
                }
            }
        };

        const serviceTabs = document.getElementById('serviceTabs');
        const serviceContents = document.getElementById('serviceContents');

        // Create service tabs
        Object.keys(services).forEach((service, index) => {
            const tab = document.createElement('div');
            tab.className = 'service-tab' + (index === 0 ? ' active' : '');
            tab.textContent = service;
            tab.addEventListener('click', () => {
                document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.service-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`service-${service.replace(/\s+/g, '-')}`).classList.add('active');
            });
            serviceTabs.appendChild(tab);
        });

        // Create service contents
        Object.entries(services).forEach(([service, categories]) => {
            const content = document.createElement('div');
            content.className = 'service-content' + (service === 'Wash & Iron' ? ' active' : '');
            content.id = `service-${service.replace(/\s+/g, '-')}`;
            
            Object.entries(categories).forEach(([category, items]) => {
                const categorySection = document.createElement('div');
                categorySection.className = 'category-section';
                
                const categoryTitle = document.createElement('h2');
                categoryTitle.className = 'category-title';
                categoryTitle.textContent = category;
                categorySection.appendChild(categoryTitle);
                
                const grid = document.createElement('div');
                grid.className = 'service-grid';
                
                Object.entries(items).forEach(([itemName, itemData]) => {
                    const card = document.createElement('div');
                    card.className = 'service-card';
                    
                    card.innerHTML = `
                        <div class="service-image" style="background-image: url('${itemData.image}')"></div>
                        <div class="service-info">
                            <div class="service-name">${itemName}</div>
                            <div class="service-price">${itemData.price}</div>
                        </div>
                    `;
                    
                    grid.appendChild(card);
                });
                
                categorySection.appendChild(grid);
                content.appendChild(categorySection);
            });
            
            serviceContents.appendChild(content);
        });

        // Add loading animation for images
        document.addEventListener('DOMContentLoaded', () => {
            const images = document.querySelectorAll('.service-image');
            images.forEach(img => {
                if (!img.style.backgroundImage || img.style.backgroundImage === 'url("")') {
                    img.classList.add('loading');
                }
            });
        });
