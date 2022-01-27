resource "aws_route53_zone" "primary" {
  name = var.root_domain_name
}

# -----------------------------------------------
# Outlook
# ----------------------------------------------- 

resource "aws_route53_record" "outlook-mx" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = var.root_domain_name
  type       = "MX"
  ttl        = "300"
  records    = ["0 heikehaensel-de.mail.protection.outlook.com"]
}

resource "aws_route53_record" "outlook-txt" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = var.root_domain_name
  type       = "TXT"
  ttl        = "300"
  records    = ["v=spf1 include:spf.protection.outlook.com -all"]
}

resource "aws_route53_record" "outlook-cname" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = "autodiscover.${var.root_domain_name}"
  type       = "CNAME"
  ttl        = "300"
  records    = ["autodiscover.outlook.com"]
}

# -----------------------------------------------
# Records
# ----------------------------------------------- 

resource "aws_route53_record" "a-record" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = var.root_domain_name
  type       = "A"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "aaaa-record" {
  depends_on = [aws_cloudfront_distribution.landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = var.root_domain_name
  type       = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.landingpage.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "a-record-www-redirect" {
  depends_on = [aws_cloudfront_distribution.redirection_to_landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = "www.${var.root_domain_name}"
  type       = "A"
  alias {
    name                   = aws_cloudfront_distribution.redirection_to_landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.redirection_to_landingpage.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "aaaa-record-www-redirect" {
  depends_on = [aws_cloudfront_distribution.redirection_to_landingpage]
  zone_id    = aws_route53_zone.primary.id
  name       = "www.${var.root_domain_name}"
  type       = "AAAA"
  alias {
    name                   = aws_cloudfront_distribution.redirection_to_landingpage.domain_name
    zone_id                = aws_cloudfront_distribution.redirection_to_landingpage.hosted_zone_id
    evaluate_target_health = false
  }
}
