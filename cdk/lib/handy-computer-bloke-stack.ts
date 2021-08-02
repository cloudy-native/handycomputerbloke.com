import { Stack, StackProps } from 'aws-cdk-lib';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, CnameRecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { CloudFrontTarget } from 'aws-cdk-lib/lib/aws-route53-targets';
import { Construct } from 'constructs';

export interface HandyComputerBlokeStackProps extends StackProps {
  domainName: string
}
export class HandyComputerBlokeStack extends Stack {
  constructor(scope: Construct, id: string, props: HandyComputerBlokeStackProps) {
    super(scope, id, props);

    const { domainName } = props

    const destinationBucket = new Bucket(this, 'origin')
    const deployment = new BucketDeployment(this, 'DeployWebsite', {
      sources: [Source.asset('../site/public')],
      destinationBucket,
    })
    const certificate = new Certificate(this, 'certificate', {
      domainName,
      validation: CertificateValidation.fromDns()
    })
    const distribution = new Distribution(this, 'distribution', {
      defaultBehavior: { origin: new S3Origin(destinationBucket) },
      defaultRootObject: 'index.html',
      certificate,
      domainNames: [domainName]
    });
    const zone = HostedZone.fromLookup(this, 'hosted-zone', {
      domainName
    })
    const alias = new CloudFrontTarget(distribution)
    const target = RecordTarget.fromAlias(alias)
    const aRecord = new ARecord(this, 'alias', {
      target,
      zone
    })
  }
}
